import {GET_ERROR,  GET_SUCCESS, CLEAR_MESSAGES} from './types';
export const ERRORS = ['loginFailed', 'severError'];

export const ERRORS_HEADING = {
    loginFailed : 'Authentication Error !',
    severError : 'Server error!',
}

export const returnError = (error, messages) => {

    return {
        type: GET_ERROR,
        payload:{
            [error]: messages
        }
    }
}

export const returnSuccess = (success, messages) => {
    return {
        type: GET_SUCCESS,
        payload:{
            [success]: messages
        }
    }
}

export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES,
        payload:{}
    }
}