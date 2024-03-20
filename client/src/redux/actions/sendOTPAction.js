import axios from "axios";
import { OTP_SENT_FAIL, OTP_SENT_SUCCESS } from "./types";

export const sendOTP=(email)=>async(dispatch)=>{
    try {
      
      const res =await axios.post("http://localhost:5000/api/sendotp",{email});
      dispatch({
        type:OTP_SENT_SUCCESS,
        email:res.data.email,
      })
    } catch (error) {
        dispatch({
            type:OTP_SENT_FAIL,
            email:null,
        })
    }
  };