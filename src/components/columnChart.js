import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import ApexChart from 'apexcharts';
import { secondaryDark, ratingColors } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';
import axios from 'axios';

import { connect } from 'react-redux';
import store from '../redux/store';
import { setAPIOption, appendSeries, setSeries, setTimeCountdown } from '../redux/actions/dashboards';
import { extractDataByKey, serialData, timestampKey, apiEndPoint } from '../helpers/APIservices';
import { extractFromTimestamp } from '../helpers/timeParser';

//state template
axios.defaults.baseURL = 'https://nguyenkim.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const chartName = 'columnChart';
const strokeWidth = 2;

var tickCountdown = 10;
var updateInterval;

var options = {
    modes: [],
    durations: ['hour', 'day', 'month'],
    limits: [7, 12, 24],
    timer: [10, 60, 3600],
    views: ['column', 'area', 'line'],

}





class Index extends Component {

    constructor(props) {
        super(props);


        this.state = {
            locations: [],
            series: [],
            optionsMixedChart: {
                chart: {
                    width: '100%',
                    background: secondaryDark,
                    id: chartName,
                },
                title: {
                    text: 'Total customer rating over time',
                    align: 'center'
                },
                colors: ratingColors,
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
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
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
                },
                dataLabels: {
                    enabled: false,
                }
            },
        }

    }


    componentDidMount(props) {
        this.getLocations();
        Object.keys(options).map((obj) => store.dispatch(setAPIOption(obj, options[obj][0], chartName)));
        store.dispatch(setAPIOption('durations', options['durations'][0], chartName))
        this.update()
        this.resetTimer()
    }

    getLocations = () => {
        axios.get(`${apiEndPoint}/location?`,
            {
                params: {},
                headers: {
                    "x-access-token": this.props.auth.token
                }
            })
            .then(res => res.data.data)
            .then(data => {
                options.locations = extractDataByKey(data, 'location');
            })
    }


    updateDataByType = (kind = null, type = null, duration = null, limit = null, location = null) => {
        const keyMap = {
            'avg': 'average',
            'total': 'total',
        }

        axios.get(`${apiEndPoint}/${kind}?`,
            {
                params: {
                    rated: type,
                    duration: duration,
                    limit: limit,
                    location: location
                },
                headers: {
                    "x-access-token": this.props.auth.token
                }
            })
            .then(res => res.data.data)
            .then(res => {
                const data = extractDataByKey(res, keyMap[kind]);
                const timestamps = extractDataByKey(res, timestampKey);
                const categories = extractFromTimestamp(timestamps, duration)
                const series = serialData(data, 'rating ' + type, store.getState().columnDashboard.views);
                store.dispatch(appendSeries(series, chartName));

                // update ApexChart
                if (chartName === 'columnChart') {
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


                    else {
                        if (this.props.options.series.length === 5) {
                            ApexChart.exec(chartName, 'updateOptions', {
                                yaxis: {
                                    min: 0,
                                    tickAmount: 5,
                                    max: Math.max(...this.props.options.series.map((obj) => Math.max(...obj.data)))
                                }
                            })
                        }
                    }
                }
                if (this.props.options.series.length === 5) {
                    const newSeries = this.props.options.series.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0))
                    ApexChart.exec(chartName, 'updateSeries', newSeries)
                    this.setState({
                        series: newSeries
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
        tickCountdown = store.getState().columnDashboard.timer;
        updateInterval = setInterval(this.updateCountdown, 1000)
    }

    update = () => {

        const overrideOptions = {
            modes: 'total'
        }
 
        axios.all(
            [1, 2, 3, 4, 5].map(rating => this.updateDataByType(
                overrideOptions.modes,
                rating,
                store.getState().columnDashboard.durations,
                store.getState().columnDashboard.limits,
                store.getState().columnDashboard.locations,
            ))
        )
            .then(res => store.dispatch(setSeries([], chartName)))

    }

    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, chartName));
        this.update()
        this.resetTimer()

        // switch (option) {
        //     case 'timer':
        //         this.resetTimer()
        //         break

        //     case 'views':
        //         this.setState({ series: this.state.series })
        //         break

        //     default:
        //         break
        // }



    }

    render(props) {
        return (
            <div style={{ borderRadius: 0, marginTop: 10, display: 'flex', flexDirection: 'column', background: secondaryDark, minHeight: '45vw' }}>
                <ToolbarQuery
                    onOptionChange={this.optionChange}
                    options={options}
                    selections={this.props.options}
                    dropdown={['locations']}
                    countdown={this.props.options.countdown}
                />
                <Chart options={this.state.optionsMixedChart} series={this.state.series} type='bar' />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        options: state.columnDashboard,
        auth: state.auth
    }
)
export default connect(mapStateToProps)(Index);
