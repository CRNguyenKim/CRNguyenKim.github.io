import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import { mainLight, secondaryDark } from '../helpers/colors';
import ToolbarQuery from './APIToolbar';


//calling API
import axios from 'axios';


//redux state handling
import store from '../redux/store';
import {setAPIOption, setData} from '../redux/actions/dashboards';
import {connect} from 'react-redux';
import {setTimeCountdown} from '../redux/actions/dashboards'
import { extractDataByKey, apiEndPoint, APIkey } from '../helpers/APIservices';
import { PassThrough } from 'stream';

//state template
var tickCountdown = 10;
var updateInterval;
const chartName = 'circleChart';
axios.defaults.baseURL = 'https://nguyenkim.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

const options = {
    durations: ['month','day'],
    timer: [10, 60, 3600],
}


class Index extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            options: {
                labels: ['rating 1', 'rating 2', 'rating 3', 'rating 4', 'rating 5'],
                chart: {
                    id:chartName,
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
                    enabled: false
                }
            }
        }
    }

    

    getLocations = () => {
        axios.get(`${apiEndPoint}/location?`,
        {
            params: {},
            headers: { 
                "x-access-token": store.getState().auth.token
            }
        })
        .then(res => res.data.data)
        .then(data =>  {
            options.locations = extractDataByKey(data, 'location');
        })
    }

    componentDidMount(){
        this.getLocations()
        Object.keys(options).map( obj =>  store.dispatch(setAPIOption(obj, options[obj][0], chartName)))
        this.update()
        this.resetTimer()
    }


    updateDataByType(type, duration='hour', newData, location=''){
        const limit = 1;
        const selection = 'total'
        axios.get(`${apiEndPoint}/${selection}?`,
            {
                params:{
                    rated: type,
                    duration: duration,
                    limit: limit,
                    location: location
                },
                headers: { 
                    "x-access-token": this.props.auth.token
                }
            }
        )
        .then(res => res.data.data )
        .then(res => {
            const data = extractDataByKey(res, selection)[0];
            newData.push({ data : data, name: type})
            if (newData.length === 5){
                newData.sort((a, b) => (a.name > b.name) ? 1 : ((a.name < b.name) ? -1 : 0));
                store.dispatch(setData( extractDataByKey(newData, 'data'), chartName))
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
            tickCountdown = store.getState().circleDashboard.timer;
            updateInterval = setInterval(this.updateCountdown, 1000)
    }

    update = () => {
        var newData = []

        this.props.options.durations  = this.props.options.durations ? this.props.options.durations : options['durations'][0]
        this.props.options.locations  = this.props.options.locations ? this.props.options.locations : options['locations'][0]
        axios.all(
            [1,2,3,4,5].map( val => 
                this.updateDataByType(val, this.props.options.durations, newData, this.props.options.locations))
        )
    }

    optionChange = (option, value) => {
        store.dispatch(setAPIOption(option, value, chartName));
        this.update()
        this.resetTimer()

        switch (option) {
            case 'timer':
                
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
                <ToolbarQuery  
                    options={options} 
                    selections={this.props.options} 
                    onOptionChange={this.optionChange}
                    dropdown={['locations']}
                    countdown={tickCountdown}
                     />
                <Chart options={this.state.options} series={this.props.options.data} type='donut' />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        options : state.circleDashboard,
        auth: state.auth
    }
)

export default connect(mapStateToProps)(Index);