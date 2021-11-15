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
      history.push("/lk")
    })
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.order,
        ...notifications.success,
      })
    })
    .catch(err => {
      console.log(err.response)
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
      console.log(err.response)
      dispatch({
        type: constants.ORDER_GET_FAILED,
      })
    })
}

export const deleteOrder = id => dispatch => {
  dispatch({ type: constants.ORDER_DELETE_LOADING })
  const token = window.sessionStorage.getItem("token")
  axios
    .delete(`${api.order.delete}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch({ type: constants.ORDER_DELETE_SUCCESS })
    })
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.orderDelete,
        ...notifications.success,
      })
    })
    .catch(err => {
      dispatch({ type: constants.ORDER_DELETE_FAILED })
      console.log(err.response)
    })
}

export const extendOrder = (data, history) => dispatch => {
  dispatch({ type: constants.ORDER_EXTEND_LOADING })
  const token = window.sessionStorage.getItem("token")
  axios
    .put(api.order.extend, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      dispatch({ type: constants.ORDER_EXTEND_SUCCESS })
    })
    .then(() => history.push("/lk"))
    .then(() => {
      store.addNotification({
        ...notifications.common,
        ...notifications.orderExtend,
        ...notifications.success,
      })
    })
    .catch(err => {
      dispatch({ type: constants.ORDER_EXTEND_FAILED })
      console.log(err)
    })
}
