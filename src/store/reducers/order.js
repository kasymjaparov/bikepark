import constants from "../constants"

const initialState = {
  order: {
    loading: false,
    success: false,
    failed: false,
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ORDER_ADD_LOADING:
      return {
        ...state,
        order: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.ORDER_ADD_SUCCESS:
      return {
        ...state,
        order: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.ORDER_ADD_FAILED:
      return {
        ...state,
        order: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    default:
      return state
  }
}

export default reducer
