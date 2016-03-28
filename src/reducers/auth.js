/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { CHANGE_FORM, SET_AUTH, SENDING_REQUEST } from '../actions/auth';
import { auth } from '../utils/auth';

// The initial application state
const initialState = {
  formState: {
    username: '',
    password: '',
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
};

// Takes care of changing the application state
export function authentication(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        formState: action.newState,
      };
    case SET_AUTH:
      return {
        ...state,
        loggedIn: action.newState,
      };
    case SENDING_REQUEST:
      return {
        ...state,
        currentlySending: action.sending,
      };
    default:
      return state;
  }
}

export default authentication;
