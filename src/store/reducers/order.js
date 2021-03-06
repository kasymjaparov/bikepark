import constants from "../constants"

const initialState = {
  addOrder: {
    loading: false,
    success: false,
    failed: false,
  },
  getOrders: {
    loading: false,
    success: false,
    failed: false,
    orders: [],
  },
  deleteOrder: {
    loading: false,
    success: false,
    failed: false,
  },
  extendOrder: {
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
        addOrder: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.ORDER_ADD_SUCCESS:
      return {
        ...state,
        addOrder: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.ORDER_ADD_FAILED:
      return {
        ...state,
        addOrder: {
          success: false,
          loading: false,
          failed: true,
        },
      }

    case constants.ORDER_DELETE_LOADING:
      return {
        ...state,
        deleteOrder: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.ORDER_DELETE_SUCCESS:
      return {
        ...state,
        deleteOrder: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.ORDER_DELETE_FAILED:
      return {
        ...state,
        deleteOrder: {
          success: false,
          loading: false,
          failed: true,
        },
      }

    case constants.ORDER_GET_LOADING:
      return {
        ...state,
        getOrders: {
          success: false,
          loading: true,
          failed: false,
          orders: [],
        },
      }
    case constants.ORDER_GET_SUCCESS:
      return {
        ...state,
        getOrders: {
          success: true,
          loading: false,
          failed: false,
          orders: action.payload,
        },
      }
    case constants.ORDER_GET_FAILED:
      return {
        ...state,
        getOrders: {
          success: false,
          loading: false,
          failed: true,
          orders: [],
        },
      }
    case constants.ORDER_EXTEND_LOADING:
      return {
        ...state,
        extendOrder: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.ORDER_EXTEND_SUCCESS:
      return {
        ...state,
        extendOrder: {
          success: true,
          loading: false,
          failed: false,
        },
      }
    case constants.ORDER_EXTEND_FAILED:
      return {
        ...state,
        extendOrder: {
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
