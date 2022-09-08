import { Types } from "../Types";

let initialState = {
  success: null,
  status: "",
  token: "",
  error: "",
  user: {},
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.USER_REGISTERED:
    case Types.USER_LOGIN:
      return {
        ...state,
        ...payload,
      };
    case Types.USER_REGISTERED_FAILED:
    case Types.USER_LOGIN_FAILED:
      return {
        ...state,
        success: false,
        status: "",
        token: "",
        error: payload?.error,
      };
    case Types.GET_CURRENT_USER:
      return {
        ...state,
        ...payload,
      };
    case Types.USER_LOGOUT:
      return {
        ...state,
        success: null,
        status: "",
        token: "",
        error: "",
        user: {},
      };

    default:
      return state;
  }
}
