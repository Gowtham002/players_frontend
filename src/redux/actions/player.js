import axios from "axios";
import { API_URL } from "../../components/common/constants";
import types from "../actionTypes/player";

export const fetchPlayers = () => dispatch => {
  dispatch(fetchPlayersPending());
  axios.get(`${API_URL}/players`)
  .then(resp => {
    if(resp && resp.data) {
      setTimeout(() => {
        dispatch(fetchPlayersSuccess(resp.data));
      }, 2000);
    }
  })
  .catch(err => {
    dispatch(fetchPlayersError());
  })
}

const fetchPlayersSuccess = players => ({
  type: types.GET_PLAYERS_SUCCESS,
  players
})

const fetchPlayersPending = () => ({
  type: types.GET_PLAYERS_PENDING
})

const fetchPlayersError = () => ({
  type: types.GET_PLAYERS_ERROR
})
