import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import players from "./player";

export default combineReducers({
  players,
  form: formReducer
})

