import api from "../../api"
import constants from "../constants"
import axios from "axios"
import { store } from "react-notifications-component"
import "animate.css"
import notifications from "../../utils/Notifications"

export const auth = userdata => dispatch => {
  axios
    .post(api.auth.registration, userdata)
    .then(({ data }) => {
      //   dispatch({ type: constants.REGISTRATION_SUCCESS, payload: data.message })
      console.log(data)
    })
    .catch(err => {
      console.log(err)
      //   dispatch({ type: constants.REGISTRATION_FAILED, payload: err.message })
    })
}
export const login = (userdata, history) => dispatch => {
  axios
    .post(api.auth.login, userdata)
    .then(({ data }) => {
      window.localStorage.setItem("token", data.token)
      dispatch({ type: constants.LOGIN_SUCCESS, payload: data })
    })
    .then(() => {
      store.addNotification(notifications.login.success)
    })
    .then(() => {
      history.push("/")
    })
    .catch(err => {
      dispatch({
        type: constants.LOGIN_FAILED,
        payload: err.response.data.message,
      })
      store.addNotification({
        ...notifications.login.failed,
        message: err.response.data.message,
      })
    })
}

// export const verification = token => {
//   return async dispatch => {
//     try {
//       const response = await axios.post(apiActivation, { token })
//       dispatch({
//         type: constants.VERIFICATION_SUCCESS,
//         payload: response.data.message,
//       })
//     } catch (e) {
//       dispatch({ type: constants.VERIFICATION_FAILED, payload: e.data.message })
//     }
//   }
// }
