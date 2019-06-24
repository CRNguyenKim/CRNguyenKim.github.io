import {GET_ERROR, GET_SUCCESS, CLEAR_MESSAGES} from '../actions/types';
import {ERRORS} from '../actions/error'

var initialState = {
    success: {},
    error: {}
}




const reducer = (state = initialState, action) => {

    switch(action.type){

        case GET_ERROR:
            return{
                ...state,
                error: action.payload
            }
        
        case GET_SUCCESS:
            return{
                ...state,
                success: action.payload
            }

        case CLEAR_MESSAGES:
            return{
                error: {},
                success: {}
            }

        default:
            return state
    }
}

export default reducer;