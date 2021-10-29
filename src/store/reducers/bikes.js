import constants from "../constants"

const initialState = {
  allBikes: {
    success: false,
    loading: true,
    failed: false,
    bikes: [],
    message: "",
  },
  filteredBikes: {
    success: false,
    loading: true,
    failed: false,
    message: "",
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
          message: action.payload,
        },
      }

    case constants.GET_FILTERED_BIKES_SUCCESS:
      return {
        ...state,
        filteredBikes: {
          success: true,
          loading: false,
          failed: true,
        },
        allBikes: {
          bikes: action.payload,
        },
      }
    case constants.GET_FILTERED_BIKES_FAILED:
      return {
        ...state,
        filteredBikes: {
          success: false,
          loading: false,
          failed: true,
          message: action.payload,
        },
      }
    default:
      return state
  }
}

export default reducer
