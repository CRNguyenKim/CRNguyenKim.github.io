import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { mainLight, secondaryDark, ratingColors } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';
import propTypes from 'prop-types';

import { Alert } from 'react-bootstrap';
import { NODATA, UNAUTHORIZED } from '../redux/actions/types';

//calling API
import axios from 'axios';


//redux state handling
import store from '../redux/store';
import { setAPIOption, setData } from '../redux/actions/dashboards';
import { connect } from 'react-redux';
import { setTimeCountdown } from '../redux/actions/dashboards'
import { extractDataByKey, apiEndPoint} from '../helpers/APIservices';

//state template

const chartName = 'circleChart';
axios.defaults.baseURL = 'https://nk-asp.herokuapp.com';



class Index extends Component {

    static propTypes = {
        options : propTypes.shape({
            duration: propTypes.arrayOf(propTypes.string),
            timer: propTypes.arrayOf(propTypes.number),
            location: propTypes.arrayOf(propTypes.location)
        }),
        series: propTypes.arrayOf(propTypes.number),
    }

    static defaultProps = {
        options: {
            durations: ['day', 'month'],
            timer: [10, 60, 3600],
            locations: []
        },
        series: [],
    }

    constructor(props) {
        super(props);
        this.state = {
            _updateInterval: null,
            dataError: '',
            data: [],
            options: {
                labels: ['Rất không tốt', 'Không tốt', 'Bình thường', 'Tốt', 'Rất tốt'],
                chart: {
                    id: chartName,
                    width: '60%',
                    foreColor: mainLight,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontSize: 800,
                    toolbar: {
                        show: true,
                        tools: {
                            download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            reset: true
                        }
                    },
                },
                colors: ratingColors,
                fill: {
                    opacity: 0.9,
                },
                title: {
                    text: 'Customer Rating Percentage',
                    align: 'left'
                },
                stroke: {
                    colors: ['transparent']
                },
                theme: {
                    palette: 'palette1',
                },
                plotOptions: {
                    pie: {
                        customScale: 1,
                        offsetX: 0,
                        offsetY: 0,
                        expandOnClick: true,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
                        },
                        donut: {
                            size: '55%',
                            background: 'transparent',
                        },
                    }
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    }



    getLocations = () => {
        var firstOption = 'all';
        axios.get(`${apiEndPoint}/location?`,
            {
                params: {},
                headers: {
                    "Authorization": `Bearer ${store.getState().auth.token}`
                }
            })
            .then(res => res.data.data)
            .then(data => {
                this.props.options.locations = [firstOption].concat(extractDataByKey(data, 'location'));
            })
    }

    componentDidMount() {
        this._tickCountdown = 10
        this.getLocations()
        Object.keys(this.props.options).map(obj => store.dispatch(setAPIOption(obj, this.props.options[obj][0], chartName)))
        this.update()
        this.resetTimer()
    }


    updateDataByType(type, duration, newData, location) {
        const limit = 1;
        const selection = 'total'
        axios.get(`${apiEndPoint}/${selection}?`,
            {
                params: {
                    rated: type,
                    duration: duration,
                    limit: limit,
                    location: location
                },
                headers: {
                    "Authorization": `Bearer ${this.props.auth.token}`
                }
            }
        )
            .then(res => res.data.data)
            .then(res => {
                const data = extractDataByKey(res, selection)[0];
                newData.push({ data: data, name: type })
                if (newData.length === 5) {
                    newData.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
                    // ApexCharts.exec(chartName, 'updateSeries', extractDataByKey(newData, 'data'), chartName);
                    store.dispatch(setData(extractDataByKey(newData, 'data'), chartName))

                    //Check data is empty?
                    if (Math.max(...newData.map(obj => obj.data)) === 0)
                        this.setState({
                            dataError: NODATA
                        })
                    else
                        this.setState({
                            dataError: ''
                        })
                }

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
        store.dispatch(setTimeCountdown(this._tickCountdown, chartName))
    }

    resetTimer = () => {
        if (this.state._updateInterval)
            clearInterval(this.state._updateInterval);
        this._tickCountdown = store.getState().circleDashboard.timer;
        var interval = setInterval(this.updateCountdown, 1000)
        this.setState({_updateInterval : interval})
    }

    update = () => {
        var newData = []
        let duration = store.getState().circleDashboard.durations ? store.getState().circleDashboard.durations : this.props.options['durations'][0]
        let location = store.getState().circleDashboard.locations ? store.getState().circleDashboard.locations : this.props.options['locations'][0]
        if (location === 'all') { location = '' }
        axios.all(
            [1, 2, 3, 4, 5].map(val =>
                this.updateDataByType(val, duration, newData, location))
        )
    }

    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, chartName));
        this.update();
        this.resetTimer();
    }

    componentWillUnmount() {
        if (this.state._updateInterval)
            clearInterval(this.state._updateInterval)
    }

    render(props) {
        return (
            <div style={{ borderRadius: 0, marginTop: 10, display: 'flex', flexDirection: 'column', background: secondaryDark, minHeight: '10vh', height:this.state.dataError === NODATA ? 'auto': '90vh' }}>
                <ToolbarQuery
                    options={this.props.options}
                    selections={this.props.optionsState}
                    onOptionChange={this.optionChange}
                    dropdown={['locations']}
                    countdown={this._tickCountdown}
                />
                {
                    this.state.dataError === UNAUTHORIZED ?
                    <Alert variant="danger">
                        Couldn't retrieve data from sever. Make sure your account is admin account!</Alert>
                    :
                    (
                        this.state.dataError === NODATA ?
                        <Alert variant="secondary"> <h2>Data is empty!</h2></Alert> :
                        <Chart options={this.state.options} series={this.props.optionsState.data} type='donut' />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        optionsState: state.circleDashboard,
        auth: state.auth
    }
)

export default connect(mapStateToProps)(Index);