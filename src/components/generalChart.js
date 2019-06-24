import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ApexChart from 'apexcharts';
import { secondaryDark, ratingColors, mainLight } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';
import axios from 'axios';




import { connect } from 'react-redux';
import store from '../redux/store';
import { setAPIOption, appendSeries, setSeries, setData, setTimeCountdown } from '../redux/actions/dashboards';
import { extractDataByKey, serialData, timestampKey, apiEndPoint, configHeader, APIkey } from '../helpers/APIservices';
import { extractFromTimestamp } from '../helpers/timeParser';


//state template
axios.defaults.baseURL = 'http://127.0.0.1:5000';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const chartName = 'generalChart';
const strokeWidth = 2;

var updateInterval;
var tickCountdown = 0;

const options = {
    modes: [],
    durations: ['hour', 'month', 'day'],
    limits: [7, 12, 24],
    timer: [3, 60, 3600],
    views: ['area', 'line'],
    categories: [],
}

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.update()
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
                    "x-access-token": this.props.auth.token
                }
            })
            .then(res => res.data.data)
            .then(res => {
                const data = extractDataByKey(res, 'average');
                const timestamps = extractDataByKey(res, timestampKey);
                const categories = extractFromTimestamp(timestamps, duration)
                const series = serialData(data, 'rating ' + rated, store.getState().generalDashboard.views);
                store.dispatch(appendSeries(series, chartName));
                // update ApexChart
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
                store.dispatch(setData([series], chartName))
            })
            .catch(err => console.log(err))
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
        clearInterval(updateInterval);
        tickCountdown = store.getState().generalDashboard.timer;
        updateInterval = setInterval(this.updateCountdown, 1000);

    }

    update = () => {
        this.updateDataByType(
            this.props.options.modes,
            1,
            this.props.options.durations,
            this.props.options.limits
        )
    }


    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, chartName));
        this.update()
        this.setState({ series: this.state.series })
        switch (option) {
            case 'timer':
                this.resetTimer()
                break

            case 'views':
                break

            default:
                break
        }


    }

    render(props) {
        return (
            <div style={{ borderRadius: 0, marginTop: 10, display: 'flex', flexDirection: 'column', background: secondaryDark }}>
                <ToolbarQuery onOptionChange={this.optionChange} options={options} selections={this.props.options} countdown={this.props.options.countdown} />
                <Chart options={this.state.optionsMixedChart}
                    series={this.props.options.data}
                    type='line' />
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
