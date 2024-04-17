import React, { useState } from "react";
import SuccessButton from "./SuccessButton";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SELLER_SIGNUP_FAILURE, SIGNUP_FAILURE } from "../../redux/actions/types";

const OtpInput = ({ type, placeholder, value, onChange, email,handleVarifcation }) => {
  const [isSent, setIsSent] = useState(false);
    const dispatch=useDispatch();
  const handleSentOTP = async (e) => {
    e.preventDefault();
    console.log("email",email);
    try { 
      console.log(email);
      const isSignUp=true;
      const res = await axios.post('http://localhost:5000/api/sendotp', { email, isSignUp});
      console.log(res.data.message);
      setIsSent(true);
      // Handle success, maybe redirect to another page
    } catch (error) {
      console.error('Error resetting password:', error);
      dispatch({
        type: SELLER_SIGNUP_FAILURE,
        payload:error.response.data.message,
      });
    }
    
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const otp=value;
      const res = await axios.post('http://localhost:5000/api/verifyotp', {email, otp });
      console.log(res.data.message);
      handleVarifcation();
    } catch (error) {
      console.error('Error validating OTP:', error);
      dispatch({
        type: SIGNUP_FAILURE,
        payload:error.response.data.message,
      });
    }
  };
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength="6"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            marginRight: "5px",
            width: "250px",
          }}
        />
        {isSent ? (
          <SuccessButton myval="Enter" type="button" onClick={handleVerify} />
        ) : (
          <SuccessButton myval="Verify"  type="button" onClick={handleSentOTP} />
        )}
      </div>
    </Container>
  );
};

export default OtpInput;
