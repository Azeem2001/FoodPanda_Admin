import { Types } from "../Types";

let initialState = {
  success: null,
  status: "",
  token: "",
  error: "",
  restaurant: [],
};
export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.GET_SINGLE_RESTURANT:
      return {
        ...state,
        ...payload,
      };
    case Types.GET_SINGLE_RESTURANT_FAILED:
      return {
        success: null,
        status: "",
        token: "",
        error: "",
        restaurant: [],
      };

    default:
      return state;
  }
}
