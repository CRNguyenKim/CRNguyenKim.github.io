import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ApexChart from 'apexcharts';
import { secondaryDark, mainLight } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';
import axios from 'axios';
import {Alert} from 'react-bootstrap'



import { connect } from 'react-redux';
import store from '../redux/store';
import { setAPIOption, appendSeries, setData, setTimeCountdown } from '../redux/actions/dashboards';
import { extractDataByKey, serialData, timestampKey, apiEndPoint } from '../helpers/APIservices';
import { extractFromTimestamp } from '../helpers/timeParser';

import {NODATA, UNAUTHORIZED} from '../redux/actions/types';

//state template
axios.defaults.baseURL = 'https://nk-asp.herokuapp.com';

const chartName = 'generalChart';
const strokeWidth = 2;

var updateInterval;
var tickCountdown = 10;

const options = {
    modes: [],
    durations: ['hour', 'day', 'month'],
    limits: [7, 12, 24],
    timer: [10, 60, 3600],
    views: ['area', 'line'],
    categories: [],
}

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataError: '',
            countdown: '',
            series: [],
            optionsMixedChart: {
                chart: {
                    width: '100%',
                    background: secondaryDark,
                    id: chartName,
                },
                title: {
                    text: 'Average customer rating over time',
                    align: 'center'
                },
                colors: [mainLight],

                stroke: {
                    width: strokeWidth,
                    opacity: 1,
                    curve: 'smooth'
                },
                markers: {
                    size: 0,
                    strokeWidth: 1,
                    strokeOpacity: 1,
                    hover: {
                        size: 4
                    }
                },
                yaxis: {
                    tickAmount: 5,
                    min: 0,
                    max: 5
                },
                grid: {
                    borderColor: '#40475D',
                },
                theme: {
                    mode: 'dark',
                },

                legend: {
                    offsetX: 0,
                    offsetY: -20,
                    height: 30,
                    markers: {
                        width: 20,
                        height: 10,
                        radius: 12,
                    }
                },
                fill: {
                    opacity: 0.7
                }
            },
        }

    }


    componentDidMount(props) {
        Object.keys(options).map((obj) => store.dispatch(setAPIOption(obj, options[obj][0], chartName)));
        this.updateDataByType(options['modes'][0], 1, options['durations'][0], options['limits'][0])
        this.resetTimer()
    }

    resetSeries = () => {
        ApexChart.exec(chartName, 'resetSeries')
    }

    updateDataByType = (kind = null, rated = null, duration = null, limit = null) => {
        axios.get(`${apiEndPoint}/avg?`,
            {
                params: {
                    rated: rated,
                    duration: duration,
                    limit: limit
                },
                headers: {
                    "Authorization": `Bearer ${this.props.auth.token}`
                }
            })
            .then(res => res.data.data)
            .then(res => {
                const data = extractDataByKey(res, 'average');
                const timestamps = extractDataByKey(res, timestampKey);
                const categories = extractFromTimestamp(timestamps, duration)
                const series = serialData(data, 'rating AVG', store.getState().generalDashboard.views);
                store.dispatch(appendSeries(series, chartName));
                // update ApexChart
                try {
                    ApexChart.exec(chartName, 'updateOptions', {
                        xaxis: {
                            categories: categories
                        }
                    });

                    if (kind === 'avg') {
                        ApexChart.exec(chartName, 'updateOptions', {
                            yaxis: {
                                min: 0,
                                tickAmount: 5,
                                max: 5
                            }
                        })
                    }
                }
                catch (err){}
                store.dispatch(setData([series], chartName))
                
                //catching empty data
                if(Math.max(...data) === 0)
                    this.setState({
                        dataError: NODATA
                    })
                else
                    this.setState({
                        dataError: ''
                    })

               
            })
            .catch(err => {
                if(err.response && err.response.status === 403){
                    this.setState({
                        dataError: UNAUTHORIZED
                    })
                }
            })

    }


    updateCountdown = () => {
        if (tickCountdown === 0) {
            this.update();
            this.resetTimer()
        }
        else
            tickCountdown -= 1
        store.dispatch(setTimeCountdown(tickCountdown, chartName))
    }

    resetTimer = () => {
        if (updateInterval)
            clearInterval(updateInterval);
        tickCountdown = store.getState().generalDashboard.timer;
        updateInterval = setInterval(this.updateCountdown, 1000);

    }

    update = () => {
        this.updateDataByType(
            store.getState().generalDashboard.modes,
            1,
            store.getState().generalDashboard.durations,
            store.getState().generalDashboard.limits
        )
    }


    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, chartName));
        this.update()
        this.resetTimer()
    }
    componentWillUnmount(){
        if(updateInterval)
            clearInterval(updateInterval)
    }

    render(props) {
        return (
            <div style={{ borderRadius: 0, marginTop: 10, display: 'flex', flexDirection: 'column', background: secondaryDark, minHeight: '10vh', transition:'0.5s' }}>
                <ToolbarQuery onOptionChange={this.optionChange} options={options} selections={this.props.options} countdown={this.props.options.countdown} />
                {
                    this.state.dataError === UNAUTHORIZED ?
                    <Alert variant="danger">Couldn't retrieve data from sever. Make sure your account is admin account!</Alert> :
                    (
                        this.state.dataError === NODATA ?
                        <Alert variant="secondary">
                            <h2>
                                Data is empty!
                            </h2>
                        </Alert> :
                        <Chart options={this.state.optionsMixedChart}
                        series={this.props.options.data}
                        type='line' />
                    )

                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        options: state.generalDashboard,
        auth: state.auth
    }
)
export default connect(mapStateToProps)(Index);
