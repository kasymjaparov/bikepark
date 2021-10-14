import api from "../../api"
import constants from "../constants"
import axios from "axios"
import { store } from "react-notifications-component"
import "animate.css"
import notifications from "../../utils/Notifications"

export const login = (userdata, history) => dispatch => {
  axios
    .post(api.auth.login, userdata)
    .then(({ data }) => {
      window.localStorage.setItem("token", data.token)
      dispatch({ type: constants.LOGIN_SUCCESS, payload: data })
    })
    .then(() => {
      history.push("/")
    })
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.login,
        ...notifications.success,
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: constants.LOGIN_FAILED,
        payload: err.response.data.message,
      })
      store.addNotification({
        ...notifications.common,
        ...notifications.failed,
        message: err.response.data.message,
      })
    })
}
export const registration = userdata => dispatch => {
  axios
    .post(api.auth.registration, userdata)
    .then(({ data }) => {
      dispatch({ type: constants.REGISTRATION_SUCCESS, payload: data.message })
    })
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.registration,
        ...notifications.success,
      })
    })
    .catch(err => {
      dispatch({
        type: constants.REGISTRATION_FAILED,
        payload: err.response.data.message,
      })
      store.addNotification({
        ...notifications.common,
        ...notifications.failed,
        message: err.response.data.message,
      })
    })
}
export const verification = token => {
  return async dispatch => {
    try {
      const response = await axios.post(api.auth.verification, { token })
      dispatch({
        type: constants.VERIFICATION_SUCCESS,
        payload: response.data.message,
      })
    } catch (err) {
      dispatch({
        type: constants.VERIFICATION_FAILED,
        payload: err.response.data.message,
      })
    }
  }
}
