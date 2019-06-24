import { SET_DATA, SET_LABELS, SET_SERIES, APPEND_SERIES, SET_COUNTDOWN } from './types';



export const setAPIOption = (option, value, prefix) => {
    return {
        type: `${prefix}SET_${option.toUpperCase()}`,
        payload:{
            [option] : value
        }
    }
}


export const setData = (data, prefix) => {
    return {
        type: prefix+SET_DATA,
        payload:{
            data: data
        }
    }
}

export const setSeries = (series, prefix) => {
    return {
        type: prefix+SET_SERIES,
        payload:{
            series: series
        }
    }
}

export const appendSeries = (data, prefix) => {
    return{
        type: prefix+APPEND_SERIES,
        payload:{
            data : data
        }
    }
}


export const setLabels = (labels, prefix) => {
    return {
        type: prefix+SET_LABELS,
        payload:{
            labels : labels,
        }
    }
}

export const setTimeCountdown = (tick, prefix) => {
    return {
        type:prefix+SET_COUNTDOWN,
        payload:{
            countdown: tick
        }
    }
}