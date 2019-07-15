import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ApexChart from 'apexcharts';
import { secondaryDark, mainLight } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';
import axios from 'axios';
import {Alert} from 'react-bootstrap';
import propTypes from 'prop-types';
import {baseURL, timestampKey, apiEndPoint} from '../helpers/config'



import { connect } from 'react-redux';
import store from '../redux/store';
import { setAPIOption, appendSeries, setData, setTimeCountdown } from '../redux/actions/dashboards';
import { extractDataByKey, serialData } from '../helpers/APIservices';
import { extractFromTimestamp } from '../helpers/timeParser';

import {NODATA, UNAUTHORIZED} from '../redux/actions/types';

//state template
axios.defaults.baseURL = baseURL;

class Index extends Component {

    static propTypes = {
        options : propTypes.shape({
            duration: propTypes.arrayOf(propTypes.string),
            limits: propTypes.arrayOf(propTypes.number),
            timer: propTypes.arrayOf(propTypes.number),
            views: propTypes.arrayOf(propTypes.string)
        }),
        chartName: propTypes.string
    }

    static defaultProps = {
        options: {
            durations: ['hour', 'day', 'month'],
            limits: [7, 12, 24],
            timer: [10, 60, 3600],
            views: ['area', 'line'],
        },
        chartName: 'generalChart'

    }

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
                    id: this.props.chartName,
                },
                title: {
                    text: 'Average customer rating over time',
                    align: 'center'
                },
                colors: [mainLight],

                stroke: {
                    width: 2,
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
        this._tickCountdown = this.props.options.timer[0]
        this._updateInterval = null

        Object.keys(this.props.options).map((obj) => store.dispatch(setAPIOption(obj, this.props.options[obj][0], this.props.chartName)));
        this.updateDataByType( 1, this.props.options['durations'][0], this.props.options['limits'][0])

        //start updating
        this.resetTimer()
    }

    resetSeries = () => {
        ApexChart.exec(this.props.chartName, 'resetSeries')
    }

    updateDataByType = ( rated = null, duration = null, limit = null) => {
        const dataFilterBy = 'avg'
        axios.get(`${apiEndPoint}/${dataFilterBy}?`,
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
                store.dispatch(appendSeries(series, this.props.chartName));
                // update ApexChart
                try {
                    ApexChart.exec(this.props.chartName, 'updateOptions', {
                        xaxis: {
                            categories: categories
                        }
                    });
                    ApexChart.exec(this.props.chartName, 'updateOptions', {
                        yaxis: {
                            min: 0,
                            tickAmount: 5,
                            max: 5
                        }
                    })
                }
                catch (err){}
                store.dispatch(setData([series], this.props.chartName))
                
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
        if (this._tickCountdown === 0) {
            this.update();
            this.resetTimer()
        }
        else
            this._tickCountdown -= 1
        store.dispatch(setTimeCountdown(this._tickCountdown, this.props.chartName))
    }

    resetTimer = () => {
        if (this._updateInterval)
            clearInterval(this._updateInterval);
        this._tickCountdown = store.getState().generalDashboard.timer;
        this._updateInterval = setInterval(this.updateCountdown, 1000);

    }

    update = () => {
        this.updateDataByType(
            1,
            store.getState().generalDashboard.durations,
            store.getState().generalDashboard.limits
        )
    }


    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, this.props.chartName));
        this.update()
        this.resetTimer()
    }
    componentWillUnmount(){
        if(this._updateInterval)
            clearInterval(this._updateInterval)
    }

    render(props) {
        return (
            <div style={{ borderRadius: 0, marginTop: 10, display: 'flex', flexDirection: 'column', background: secondaryDark, minHeight: '10vh', transition:'0.5s' , height:this.state.dataError === NODATA ? 'auto':'90vh' }}>
                <ToolbarQuery onOptionChange={this.optionChange} options={this.props.options} selections={this.props.optionsState} countdown={this.props.optionsState.countdown} />
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
                        series={this.props.optionsState.data}
                        type='line' />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        optionsState: state.generalDashboard,
        auth: state.auth
    }
)
export default connect(mapStateToProps)(Index);
