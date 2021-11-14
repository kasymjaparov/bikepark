import axios from "axios"
import { store } from "react-notifications-component"
import "animate.css"
import api from "../../api"
import constants from "../constants"
import notifications from "../../utils/Notifications"

export const login = (userdata, history) => dispatch => {
  axios
    .post(api.auth.login, userdata)
    .then(({ data }) => {
      window.sessionStorage.setItem("token", data.token)
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
      console.log(data)
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
      console.log(err.response)
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

export const verification = (token, history) => dispatch => {
  axios
    .post(api.auth.verification, { token })
    .then(({ data }) => {
      dispatch({ type: constants.VERIFICATION_SUCCESS, payload: data.message })
    })
    .then(() => {
      setTimeout(() => {
        history.push("/auth")
      }, 5000)
    })
    .catch(err => {
      dispatch({
        type: constants.VERIFICATION_FAILED,
        payload: err.response.data.message,
      })
    })
}

export const logout = () => dispatch => {
  dispatch({
    type: constants.LOGOUT_SUCCESS,
  })
  window.sessionStorage.removeItem("token")
  document.location.replace("/")
}
