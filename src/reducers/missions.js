import * as Actions from '../actions/missions';

const defaultState = {
  isFetching: false,
  items: [],
};

function missions(state = defaultState, action) {
  switch (action.type) {
    case Actions.REQUEST_MISSIONS:
      return {
        ...state,
        isFetching: true,
      };
    case Actions.RECEIVE_MISSIONS:
      return {
        ...state,
        isFetching: false,
        items: action.missions,
        lastUpdated: action.receivedAt,
      };
    default:
      return state;
  }
}

export default missions;
