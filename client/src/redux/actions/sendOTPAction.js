import axios from "axios";
import { OTP_SENT_FAIL, OTP_SENT_SUCCESS, PASSWORD_UPADTED, SET_OTP_ERROR } from "./types";

export const sendOTP=(email ,userType)=>async(dispatch)=>{
    try {
      console.log("hello");
      const res =await axios.post("http://localhost:5000/api/sendotp",{email ,userType});
      dispatch({
        type:OTP_SENT_SUCCESS,
        email:res.data.email,
      })
    } catch (error) {
        dispatch({
            type:OTP_SENT_FAIL,
            error:error.response.data.message,
        })
    }
  };

export const setOTPError =()=>(dispatch)=>{
  dispatch({
    type:SET_OTP_ERROR,
  })
}
export const setNewLogin=()=>(dispatch)=>{
  dispatch({
    type:PASSWORD_UPADTED,
  })
}