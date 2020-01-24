import axios from "axios";

export const FETCHING_TEAMS_START = "FETCHING_TEAMS_START"
export const FETCHING_TEAMS_SUCCESS= "FETCHING_TEAMS_SUCCESS"
export const FETCHING_TEAMS_FAILURE= "FETCHING_TEAMS_FAILURE"
        
export const fetchTeams = () => dispatch => {
  dispatch({ type: FETCHING_TEAMS_START });
  axios
    .get('https://www.balldontlie.io/api/v1/teams')
    .then(res => {
          dispatch({ type: FETCHING_TEAMS_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
        dispatch({ type: FETCHING_TEAMS_FAILURE, payload: err.response });
 });
}