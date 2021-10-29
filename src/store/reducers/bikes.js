import constants from "../constants"

const initialState = {
  allBikes: {
    success: false,
    loading: true,
    failed: false,
    bikes: [],
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GETALLBIKES_SUCCESS:
      return {
        ...state,
        allBikes: {
          success: true,
          loading: false,
          failed: true,
          bikes: action.payload,
        },
      }
    case constants.GETALLBIKES_FAILED:
      return {
        ...state,
        allBikes: {
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
