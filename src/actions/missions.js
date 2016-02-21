import fetch from 'isomorphic-fetch';

export const REQUEST_MISSIONS   = 'REQUEST_MISSIONS';
export const RECEIVE_MISSIONS   = 'RECEIVE_MISSIONS';
export const SELECT_MISSION     = 'SELECT_MISSION';
export const INVALIDATE_MISSION = 'INVALIDATE_MISSION';

export function selectMission(mission) {
  return {
    type: SELECT_MISSION,
    mission,
  };
}

export function unselectMission(mission) {
  return {
    type: INVALIDATE_MISSION,
    mission,
  };
}

function requestMissions() {
  return {
    type: REQUEST_MISSIONS,
  };
}

function receiveMissions(json) {
  return {
    type: RECEIVE_MISSIONS,
    missions: json.missions,
    receivedAt: Date.now(),
  };
}

function fetchMissions() {
  return dispatch => {
    dispatch(requestMissions());

    return fetch('//localhost:4080/api/missions/index')
      .then(req => req.json())
      .then(json => dispatch(receiveMissions(json)));
  };
}

function shouldFetchMissions(state) {
  const missions = state.missions;
  if (!missions) {
    return true;
  }

  if (missions.isFetching) {
    return false;
  }

  return true;
}

export function fetchMissionsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMissions(getState())) {
      return dispatch(fetchMissions());
    }
  };
}
