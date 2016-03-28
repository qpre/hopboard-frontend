import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import authentication from './auth';
import missions from './missions';

const rootReducer = combineReducers({
  routing: routeReducer,
  authentication,
  missions,
});

export default rootReducer;
