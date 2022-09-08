import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import resturant from "./resturant";
export default combineReducers({
  auth,
  alert,
  resturant,

});
