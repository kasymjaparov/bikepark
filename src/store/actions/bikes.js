import axios from "axios"
import api from "../../api"
import constants from "../constants"

export const getAll = () => dispatch => {
  dispatch({ type: constants.GETALLBIKES_LOADING })
  axios
    .get(api.bikes.getAll)
    .then(({ data }) => {
      dispatch({ type: constants.GETALLBIKES_SUCCESS, payload: data.bikes })
    })
    .catch(err => {
      dispatch({
        type: constants.GETALLBIKES_FAILED,
        payload: err.response.data.message,
      })
    })
}

export const getFiltered = params => dispatch => {
  dispatch({ type: constants.GET_FILTERED_BIKES_LOADING })
  axios
    .get(
      `${api.bikes.getfiltered}?brand=${params.brand}&wheelsSize=${params.wheelsSize}&frameSize=${params.frameSize}&isRented=${params.isRented}`
    )
    .then(({ data }) => {
      dispatch({
        type: constants.GET_FILTERED_BIKES_SUCCESS,
        payload: data.filtered,
      })
    })
    .catch(err => {
      dispatch({
        type: constants.GET_FILTERED_BIKES_FAILED,
        payload: err.response.data.message,
      })
    })
}

export const addBike = bike => dispatch => {
  dispatch({ type: constants.ADD_BIKES, payload: bike })
}
export const deleteBike = id => dispatch => {
  dispatch({ type: constants.DELETE_BIKES, payload: id })
}
export const clearBikes = () => dispatch => {
  dispatch({ type: constants.CLEAR_BIKES })
}
