import { SET_DATA, SET_MODES, SET_DURATIONS, SET_LIMITS, SET_TIMER, SET_VIEWS, SET_CATEGORIES, SET_SERIES, APPEND_SERIES, SET_LOCATIONS, SET_COUNTDOWN } from '../actions/types';


const initialState = {
    modes: '',
    durations: '',
    limits: '',
    views: '',
    timer: '',
    series: [],
    data: [],
    labels: [],
    locations: []
}


export default function entityReducer(prefixName=''){
    
    return function reducer(state = initialState, action) {

        switch (action.type) {
            
            case prefixName + SET_MODES:
                return {
                    ...state,
                    modes: action.payload.modes
                }

            case prefixName + SET_DURATIONS:
                return {
                    ...state,
                    durations: action.payload.durations
                }

            case prefixName + SET_LIMITS:
                return {
                    ...state,
                    limits: action.payload.limits
                }


            case prefixName + SET_VIEWS:
                return {
                    ...state,
                    views: action.payload.views
                }

            case prefixName + SET_TIMER:
                return {
                    ...state,
                    timer: action.payload.timer
                }

            case prefixName + SET_DATA:
                return {
                    ...state,
                    data: action.payload.data
                }

            case prefixName + SET_CATEGORIES:
                return {
                    ...state,
                    categories: action.payload.categories
                }

            case prefixName + SET_SERIES:
                return {
                    ...state,
                    series: action.payload.series
                }
            
            case prefixName + APPEND_SERIES:
                return {
                    ...state,
                    series: state.series.concat(action.payload.data)
                }
            
            case prefixName + SET_LOCATIONS:
                return {
                    ...state,
                    locations : action.payload.locations
                }
            
            case prefixName + SET_COUNTDOWN:
                return{
                    ...state,
                    countdown : action.payload.countdown
                }

            default:
                return state
        }
    }
}

