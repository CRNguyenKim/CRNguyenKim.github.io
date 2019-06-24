import entityDashboard from './reducers/dashboard';
import auth from './reducers/auth';
import error from './reducers/error'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const reducer = combineReducers({generalDashboard: entityDashboard('generalChart'), circleDashboard: entityDashboard('circleChart'), columnDashboard: entityDashboard('columnChart'), auth: auth, messages:error});
const store = createStore(reducer, {}, applyMiddleware(thunk));
export default store;