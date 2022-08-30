import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { setAlert } from "./alert";
export const userRegister =
  (formData, setEmail, setName, setPassword, navigate, setLoading, setImage) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(
        `${BASE_URL}/api/admin/register`,
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", response?.data?.token);
      dispatch({ type: Types.USER_REGISTERED, payload: response?.data });
      dispatch(setAlert({
        time:1000,
        message:"Sign Up SuccessFully Done",
        type:"success"
      }))
      setLoading(false);
      navigate("/");
      setEmail("");
      setName("");
      setPassword("");
      setImage("");
    } catch (error) {
      dispatch({
        type: Types.USER_REGISTERED_FAILED,
        payload: error?.response?.status,
      });
      console.log(error);
      setLoading(false);
    }
  };

export const uploadImage = (image) => async (dispatch) => {
  try {
    let formbody = new FormData();
    formbody.append("image", image);
    let response = await axios.post(`${BASE_URL}/api/image/upload`, formbody);
    return response.data?.file[0]?.url;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin =
  (formData, setEmail, setPassword, navigate, setLoading) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(`${BASE_URL}/api/admin/login`, formData);
      // console.log(response.data)
      localStorage.setItem("token", response?.data?.token);
      dispatch({ type: Types.USER_LOGIN, payload: response?.data });
      dispatch(setAlert({
        time:1000,
        message:"Login SuccessFully Done",
        type:"success"
      }))
      setLoading(false);
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (error) {
      dispatch({
        type: Types.USER_LOGIN_FAILED,
        payload: error?.response?.status,
      });
      console.log(error);
      dispatch(
        setAlert({
          time: 1000,
          message: error?.message,
          type: "error",
        })
      );
      dispatch(
        setAlert({
          time: 1000,
          message: error?.response?.data?.status,
          type: "error",
        }))
      setLoading(false);
    }
  };

export const checkEmail =
  (formData, setLoading, navigate, setRigester) => async (dispatch) => {
    setLoading(true);
    try {
      // console.log(formData);
      let response = await axios.post(
        `https://9a5e-2407-aa80-14-568d-390a-381d-7e50-a2b3.in.ngrok.io/api/auth/is-email`,
        {
          email: formData.email,
        }
      );
      response.data.isRegistered
        ? navigate("/LoginPage")
        : setRigester("account");
      dispatch({ type: Types.CHECK_EMAIL, payload: response?.data });
      setLoading(false);
      // navigate("/");
      // setEmail("");
    } catch (error) {
      dispatch({
        type: Types.CHECK_EMAIL_FAILED,
        payload: error?.response?.status,
      });
      console.log(error);
      setLoading(false);
    }
  };
export const currentUser = (usertoken) => async (dispatch) => {
  try {
    let response = await axios.post(`${BASE_URL}/api/auth/current-user`);
    dispatch({ type: Types.GET_CURRENT_USER, payload: response?.data });
    dispatch(
      setAlert({
        time: 1000,
        message:response?.data?.status,
        type: "success",
      }))
  } catch (error) {
    dispatch({
      type: Types.GET_CURRENT_USER_FAILED,
      payload: error?.response?.status,
    });
    console.log(error); 
  }
};
export const logout = () => async (dispatch) => {
  console.log("hello")
  localStorage.removeItem("token");
  dispatch(
    setAlert({
      time: 1000,
      message:'User has been logout',
      type: "error",
    }))
    dispatch({
      type: Types.USER_LOGOUT,
    });
};

export const ResturantData = (formData,   setLoading,
  setLocation,
  setResturant,
  setCityName,
  setPlace,
  setImage ) => async(dispatch) =>{
  try {
    let response = await axios.post(`${BASE_URL}/api/restaurant/add-restaurant`, formData )

    dispatch({ type: Types.ADD_RESTURANT_DATA, payload: response?.data });
    dispatch(
      setAlert({
        time: 1000,
        message: response?.data?.status,
        type: "success",
      }))
    setLoading(false)
    setResturant("")
    setLocation("")
    setCityName("")
    setPlace("")
    setImage("")
  } catch (error) {
    
    dispatch({
      type: Types.ADD_RESTURANT_DATA_FAILED,
      payload: error?.response?.status,
    });
    dispatch(
      setAlert({
        time: 1000,
        message: error?.response?.data?.status,
        type: "error",
      }))
  }

}