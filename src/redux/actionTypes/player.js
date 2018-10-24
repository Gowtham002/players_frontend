import { generateTypes } from "./../utils";
const types =  {
  ...generateTypes("GET_PLAYERS"),
  ...generateTypes("SAVE_PLAYER"),
  ...generateTypes("DELETE_PLAYER")
}

export default types;