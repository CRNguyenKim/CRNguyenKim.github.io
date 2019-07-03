import axios from 'axios';
import { USER_LOADING, USER_LOGOUT, USER_LOADED, LOGIN_SUCCESS, GET_ERROR } from './types';
import { ERRORS_HEADING } from './error'
axios.defaults.baseURL = 'https://nguyenkim.herokuapp.com';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

export const loadAdmin = () => (dispatch, getState) => {

    dispatch({ type: USER_LOADING });
    const token = getState().auth.token;

    axios.get('/api/v1/auth/user', {
        params: {},
        headers: {
            'x-access-token': token
        }
    })
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            if (!err.response)
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        [ERRORS_HEADING.severError]: 'Sever is not responding!'
                    }
                })
        }
        )
}

export const login = (username, password) => dispatch => {

    axios.post(
        'api/v1/auth/login',
        {
            username: username,
            password: password,
        }
    )
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            if (err.response)
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        [ERRORS_HEADING.loginFailed]: "Invalid login or password"
                    }
                })
            else
                dispatch({
                    type: GET_ERROR,
                    payload: {
                        [ERRORS_HEADING.severError]: 'Sever is not responding!'
                    }
                })
        }
        )
}

export const logout = () => (dispatch, getState) => {

    dispatch({
        type: USER_LOGOUT
    })

}