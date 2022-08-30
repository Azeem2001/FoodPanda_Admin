import {Types} from "../Types"

export const setAlert = (data) => async(dispatch) =>{
    dispatch({type: Types.ALERT_USER, payload: data});
    setTimeout(()=>{
    
        dispatch({type: Types.ALERT_USER_CLOSE, payload: data});

    }, data?.time)
}