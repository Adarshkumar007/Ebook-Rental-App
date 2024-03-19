import {OTP_SENT_FAIL, OTP_SENT_SUCCESS, } from '../actions/types';
const initialState={
    email:null,
    otpSent:"",
    error:false,
}
const sendOTPReducer = (state = initialState, action) => {
    switch (action.type) {
        case OTP_SENT_SUCCESS:
            console.log("true");
            return {
                ...state,
                email:action.email,
                otpSent:true,
                error:false,
            }
        case OTP_SENT_FAIL:
            console.log("no");
            return {
                ...state,
                email:null,
                otpSent:false,
                error:true,
            }
        default:
            return state;
    }

}
export default sendOTPReducer;