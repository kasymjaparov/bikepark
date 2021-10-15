import constants from "../constants"

const initialState = {
  login: {
    success: false,
    loading: true,
    failed: false,
    message: "",
    token: "",
  },
  registration: {
    success: false,
    loading: true,
    failed: false,
    message: "",
  },
  verification: {
    success: false,
    loading: true,
    failed: false,
    message: "",
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOGIN_FAILED:
      return {
        ...state,
        login: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.LOGIN_LOADING:
      return {
        ...state,
        login: {
          success: false,
          loading: true,
          failed: false,
        },
      }
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          success: true,
          loading: false,
          failed: false,
          message: action.payload.message,
          token: action.payload.token,
        },
        registration: {
          success: false,
          loading: false,
          failed: false,
        },
      }
    case constants.REGISTRATION_SUCCESS:
      return {
        ...state,
        registration: {
          success: true,
          loading: false,
          failed: false,
          message: action.payload,
        },
        login: {
          success: false,
          loading: false,
          failed: false,
        },
      }
    case constants.REGISTRATION_FAILED:
      return {
        ...state,
        registration: {
          success: false,
          loading: false,
          failed: true,
        },
      }
    case constants.VERIFICATION_SUCCESS:
      return {
        ...state,
        verification: {
          success: true,
          loading: false,
          failed: false,
          message: action.payload,
        },
      }
    case constants.VERIFICATION_FAILED:
      return {
        ...state,
        verification: {
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
