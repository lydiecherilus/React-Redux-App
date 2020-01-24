import {
    FETCHING_TEAMS_START, FETCHING_TEAMS_SUCCESS, FETCHING_TEAMS_FAILURE
  } from '../actions';

const initialState = {
    teams: [],
    gettingTeams: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_TEAMS_START:
            return {
                ...state,
                gettingTeams: true,
                error: ""
            };
        case FETCHING_TEAMS_SUCCESS:
            return {
                ...state,
                gettingTeams: false,
                error: "",
                teams: action.payload
            };
        case FETCHING_TEAMS_FAILURE:
            return {
                ...state,
                gettingTeams: false,
                error: action.payload
            };
        default:
            return state;
    }
};