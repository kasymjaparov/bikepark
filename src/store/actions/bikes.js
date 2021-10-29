import axios from "axios"
import api from "../../api"
import constants from "../constants"

export const getAll = () => dispatch => {
  axios
    .get(api.bikes.getAll)
    .then(({ data }) => {
      console.log(data)
      dispatch({ type: constants.GETALLBIKES_SUCCESS, payload: data.bikes })
    })
    .catch(err => {
      dispatch({
        type: constants.GETALLBIKES_FAILED,
        payload: err.response.data.message,
      })
    })
}
