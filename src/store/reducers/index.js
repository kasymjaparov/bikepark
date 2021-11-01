import { combineReducers } from "redux"
import auth from "./auth"
import bikes from "./bikes"
import order from "./order"

export default combineReducers({
  auth,
  bikes,
  order,
})
