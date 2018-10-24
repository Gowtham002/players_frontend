import types from "../actionTypes/player";

const initialState = {
  players: [],
  loading: false,
  hasError: false,
  hasSaveError: false,
  saveSuccess: false,
  currentPage: 1,
  totalPages: 0
}

const players = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_PLAYERS_PENDING:
      return { ...state, loading: true, players: [], hasError: false }
    case types.GET_PLAYERS_ERROR:
      return { ...state, hasError: true, players: [], loading: false }
    case types.GET_PLAYERS_SUCCESS:
      return { ...state, players: action.players, currentPage: action.currentPage, totalPages: action.totalPages, loading: false, hasError: false }
    case types.SAVE_PLAYER_PENDING:
      return { ...state, loading: true, hasSaveError: false }
    case types.SAVE_PLAYER_ERROR:
      return { ...state, hasSaveError: true, loading: false }
    case types.SAVE_PLAYER_SUCCESS:
      return { ...state, loading: false, hasSaveError: false, saveSuccess: true }
    case types.DELETE_PLAYER_PENDING:
      return { ...state, loading: true }
    case types.DELETE_PLAYER_ERROR:
      return { ...state, hasError: true, loading: false }
    case types.DELETE_PLAYER_SUCCESS:
      let { playerId } = action;
      let { players } = state;
      return { ...state, players: players.filter(p => p._id !== playerId), loading: false, hasError: false }
    default:
      return state;
  }
}

export default players;