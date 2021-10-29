import axios from "axios"
import api from "../../api"
import constants from "../constants"

export const getAll = () => dispatch => {
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
