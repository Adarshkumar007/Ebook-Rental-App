import React, { useState, useRef } from "react";
import SuccessButton from "./SuccessButton";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { SELLER_SIGNUP_FAILURE, SIGNUP_FAILURE } from "../../redux/actions/types";

const OtpInput = ({ type, placeholder, value, onChange, email, handleVerification, setSuccessMessage }) => {
  const [isSent, setIsSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleSentOTP = async (e) => {
    e.preventDefault();
    try {
      const isSignUp = true;
      const res = await axios.post("http://localhost:5000/api/sendotp", {
        email,
        isSignUp,
      });
      console.log(res.data.message);
      setIsSent(true);
      setSuccessMessage("OTP has been sent to your email. Please check and verify.");
      dispatch({ type: SIGNUP_FAILURE, payload: "" }); // Clear any previous error
    } catch (error) {
      console.error("Error sending OTP:", error);
      dispatch({
        type: SELLER_SIGNUP_FAILURE,
        payload: error.response?.data?.message || "Failed to send OTP",
      });
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const otp = value;
      const res = await axios.post("http://localhost:5000/api/verifyotp", {
        email,
        otp,
      });
      console.log(res.data.message);
      handleVerification();
      setIsVerified(true);
      setSuccessMessage("Email has been verified successfully.");
      dispatch({ type: SIGNUP_FAILURE, payload: "" }); // Clear any previous error
    } catch (error) {
      console.error("Error validating OTP:", error);
      dispatch({
        type: SIGNUP_FAILURE,
        payload: error.response?.data?.message || "Invalid OTP",
      });
      onChange({ target: { value: "" } });
      setIsSent(false);
    }
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength="6"
          ref={inputRef}
          key={isSent ? "otp-sent" : "otp-not-sent"}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            marginRight: "5px",
          }}
          disabled={isVerified}
        />
        {isSent ? (
          <SuccessButton myval="Enter" type="button" onClick={handleVerify} />
        ) : (
          <SuccessButton myval="Verify" type="button" onClick={handleSentOTP} />
        )}
      </div>
    </Container>
  );
};

export default OtpInput;
