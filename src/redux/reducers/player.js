import types from "../actionTypes/player";

const initialState = {
  players: [],
  fetching: false,
  hasError: false
}

const players = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_PLAYERS_PENDING:
      return { fetching: true, players: [], hasError: false }
    case types.GET_PLAYERS_ERROR:
      return { hasError: true, players: [], fetching: false }
    case types.GET_PLAYERS_SUCCESS:
      return { players: action.players, fetching: false, hasError: false }
    default:
      return state;
  }
}

export default players;