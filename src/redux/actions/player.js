import axios from "axios";
import { API_URL } from "../../components/common/constants";
import types from "../actionTypes/player";

export const fetchPlayers = (page = 1) => dispatch => {
  dispatch(fetchPlayersPending());
  axios.get(`${API_URL}/players?page=${page}`)
  .then(resp => {
    if(resp && resp.data) {
      dispatch(fetchPlayersSuccess(resp.data));
    } else {
      dispatch(fetchPlayersError());
    }
  })
  .catch(err => {
    dispatch(fetchPlayersError());
  })
}

export const savePlayer = (player) => dispatch => {
  dispatch(savePlayerPending());
  axios.post(`${API_URL}/players`, player)
  .then(resp => {
    if(resp && resp.data) {
      dispatch(savePlayerSuccess());
    } else {
      dispatch(savePlayerError());
    }
  })
  .catch(err => {
    dispatch(savePlayerError());
  })
}

export const deletePlayer = (playerId) => dispatch => {
  dispatch(deletePlayerPending());
  axios.delete(`${API_URL}/players/${playerId}`)
  .then(resp => {
    if(resp && resp.data) {
      dispatch(deletePlayerSuccess(playerId));
    } else {
      dispatch(deletePlayerError());
    }
  })
  .catch(err => {
    dispatch(deletePlayerError());
  })
}

const fetchPlayersSuccess = (data) => ({
  type: types.GET_PLAYERS_SUCCESS,
  ...data
})

const fetchPlayersPending = () => ({
  type: types.GET_PLAYERS_PENDING
})

const fetchPlayersError = () => ({
  type: types.GET_PLAYERS_ERROR
})

const savePlayerSuccess = player => ({
  type: types.SAVE_PLAYER_SUCCESS,
  player
})

const savePlayerPending = () => ({
  type: types.SAVE_PLAYER_PENDING
})

const savePlayerError = () => ({
  type: types.SAVE_PLAYER_ERROR
})

const deletePlayerSuccess = playerId => ({
  type: types.DELETE_PLAYER_SUCCESS,
  playerId
})

const deletePlayerPending = () => ({
  type: types.DELETE_PLAYER_PENDING
})

const deletePlayerError = () => ({
  type: types.DELETE_PLAYER_ERROR
})