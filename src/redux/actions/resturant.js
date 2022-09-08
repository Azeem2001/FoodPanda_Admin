import { Types } from "../Types";
import axios from "axios";
import { BASE_URL } from "../../config/config";
import { setAlert } from "./alert";
// import { setAlert } from "./alert";

export const singleResturantdata = (gettoken) => async (dispatch) => {
  try {
    let response = await axios.get(
      `${BASE_URL}/api/restaurant/single-restaurant`
    );

    dispatch({ type: Types.GET_SINGLE_RESTURANT, payload: response?.data });

    //   dispatch(
    // setAlert({
    //   time: 1000,
    //   message: response?.data?.status,
    //   type: "success",
    // }))
  } catch (error) {
    dispatch({
      type: Types.GET_SINGLE_RESTURANT_FAILED,
      payload: error?.response?.status,
    });
    //   dispatch(
    //     setAlert({
    //       time: 1000,
    //       message: error?.response?.data?.status,
    //       type: "error",
    //     }))
  }
};
export const updateResturant = (fooditems, resturantId,setFooditems) => async (dispatch) => {
  try {
    let response = await axios.put(
      `${BASE_URL}/api/restaurant/update-restaurant/${resturantId}`,
      { fooditems }
    );
   dispatch(singleResturantdata())
   setFooditems([
    {
      name: "",
      items: [
        {
          image: "",
          title: "",
          description: "",
          price: "",
        },
      ],
    },
  ])
    dispatch(
      setAlert({
        time: 1000,
        message: response?.data?.status,
        type: "success",
      })

    );

  } catch (error) {
    dispatch(
      setAlert({
        time: 1000,
        message: error?.response?.data?.status,
        type: "error",
      })
    );
  }
};
