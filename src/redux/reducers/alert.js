import { Types } from "../Types";

const initialState = {
  type: "",
  message: "",
  success: false,
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.ALERT_USER:
      return {
        ...state,
        type: payload.type,
        message: payload.message,
        success: true,
      };
    case Types.ALERT_USER_CLOSE:
      return {
        ...state,
        type: "",
        message: "",
        success: false,
      };

    default:
      return state;
  }
}