import * as Actions from '../actions/missions';

const defaultState = {
  isFetching: false,
  items: [],
  selected: null,
};

function missions(state = defaultState, action) {
  switch (action.type) {
    case Actions.SELECT_MISSION:
      return {
        ...state,
        selected: action.mission,
      };
    case Actions.INVALIDATE_MISSION:
      return {
        ...state,
        selected: null,
      };
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
