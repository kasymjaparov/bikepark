import { combineReducers } from "redux"
import auth from "./auth"
import bikes from "./bikes"

export default combineReducers({
  auth,
  bikes,
})
