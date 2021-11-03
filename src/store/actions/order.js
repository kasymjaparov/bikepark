import axios from "axios"
import { store } from "react-notifications-component"
import "animate.css"
import api from "../../api"
import constants from "../constants"
import notifications from "../../utils/Notifications"

export const addOrder = (order, history) => dispatch => {
  dispatch({ type: constants.ORDER_ADD_LOADING })
  const token = window.sessionStorage.getItem("token")
  axios
    .post(api.order.add, order, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch({ type: constants.ORDER_ADD_SUCCESS })
    })
    .then(() => {
      history.push("/")
    })
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.order,
        ...notifications.success,
      })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: constants.ORDER_ADD_FAILED,
        payload: err.response.data.message,
      })
    })
}

export const getOrders = () => dispatch => {
  dispatch({ type: constants.ORDER_GET_LOADING })
  const token = window.sessionStorage.getItem("token")
  axios
    .get(api.order.get, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch({ type: constants.ORDER_GET_SUCCESS, payload: data })
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: constants.ORDER_GET_FAILED,
      })
    })
}
