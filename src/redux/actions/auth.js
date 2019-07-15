import axios from 'axios';
import { USER_LOADING, USER_LOGOUT, USER_LOADED, LOGIN_SUCCESS, GET_ERROR, ADMIN_LOADED } from './types';
import { baseURL } from '../../helpers/config'
import { ERRORS_HEADING } from './error'
axios.defaults.baseURL = baseURL;


export const loadAdmin = (_token) => (dispatch, getState) => {

    dispatch({ type: USER_LOADING });
    const token = _token ? _token : getState().auth.token;

    axios.get('/api/auth/admin', {
        params: {},
        headers: {
            'Content-Type': 'aplication/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({
                type: ADMIN_LOADED,
                payload: res.data
            });
        })
        .catch(
            err => {
                if (!err.response)
                    dispatch({
                        type: GET_ERROR,
                        payload: {
                            [ERRORS_HEADING.severError]: 'Sever is not responding!'
                        }
                    })
                else if (err.response.status === 403) {
                    dispatch({
                        type: GET_ERROR,
                        payload: {
                            [ERRORS_HEADING.loginFailed]: "Account is not authorized"
                        }
                    })
                    dispatch({
                        type: USER_LOGOUT
                    })
                }
            }
        )


}

export const login = (username, password) => dispatch => {

    axios.post(
        'api/auth/login',
        {
            username: username,
            password: password,
        })
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            if (!err.response)
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        [ERRORS_HEADING.severError]: 'Sever is not responding!'
                    }
                })
            else if (err.response.status === 400) {
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        [ERRORS_HEADING.loginFailed]: "Invalid login or password"
                    }
                })
            }
        })
        .then(
            res =>
                dispatch(loadAdmin())
        )


}

export const logout = () => (dispatch, getState) => {

    dispatch({
        type: USER_LOGOUT
    })

}