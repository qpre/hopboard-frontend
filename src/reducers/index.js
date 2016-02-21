import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import auth from './auth';
import missions from './missions';

const rootReducer = combineReducers({
  routing: routeReducer,
  auth,
  missions,
});

export default rootReducer;
