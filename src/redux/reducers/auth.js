import { USER_LOADING, USER_LOADED, USER_LOGOUT, LOGIN_FAILED, LOGIN_SUCCESS, ADMIN_LOADED } from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    isLoading: false,
    user: null
}

const auth = (state = initialState, action) => {

    switch (action.type) {

        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case USER_LOADED:       
            return {
                ...state,
                isLoading: false,
                user: action.payload.username
            }; 

        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isLoading: false,
                user: action.payload.username
            }

        case LOGIN_FAILED:
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        case ADMIN_LOADED:
            return{
                ...state,
                isAuthenticated: true
            }
        default:
            return state
    }
}

export default auth;
