import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";
import { sendOTP, setNewLogin } from "../redux/actions/sendOTPAction";
import MyInput from "./MyComponent/MyInput";
import SuccessButton from "./MyComponent/SuccessButton";
import { url } from "../url";

const OTPForm = ({ setIsForgotPassword }) => {
  const [otp, setOTP] = useState("");
  const [error, setError] = useState("");
  const email = useSelector((state) => state.sendOTP.email) || "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidOTP, setIsValidOTP] = useState(false);
  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const dispatch = useDispatch();

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(
      password
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url + "/api/verifyotp", { email, otp });
      console.log(res.data.message);
      setIsValidOTP(true);
      setError("");
    } catch (error) {
      console.error("Error validating OTP:", error);
      setIsValidOTP(false);
      setError("Failed to validate OTP. Please try again.");
    }
  };

  const handleNewPasswordSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setError(
        "Password should be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      console.log(email, newPassword);
      const res = await axios.post("http://localhost:5000/api/resetpassword", {
        email,
        newPassword,
        userType,
      });
      setIsForgotPassword(false);
      dispatch(setNewLogin());
      console.log(res.data.message);

      // Handle success, maybe redirect to another page
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Failed to reset password. Please try again.");
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    console.log("resend");
    dispatch(sendOTP(email));
  };

  return (
    <>
      {!isValidOTP && (
        <Form onSubmit={handleSubmit}>
          {error && (
            <Alert variant="danger">
              <div className="error" style={{ color: "red" }}>
                {error}
              </div>
            </Alert>
          )}

          <Form.Group controlId="otp">
            <div style={{ marginBottom: "20px" }}>
              <MyInput
                type="text"
                label="Enter OTP"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
          </Form.Group>

          <div style={{ display: "flex", gap: "5px" }}>
            <SuccessButton myval="Submit" type="submit" />

            <button
              className="btn btn-secondary"
              onClick={handleResendOTP}
              style={{ border: "1px solid #000d42" }}
            >
              Re-send OTP
            </button>
          </div>
        </Form>
      )}

      {isValidOTP && (
        <Form onSubmit={handleNewPasswordSubmit}>
          {error && (
            <Alert variant="danger">
              <div className="error" style={{ color: "red" }}>
                {error}
              </div>
            </Alert>
          )}

          <Form.Group controlId="newPassword">
            <div style={{ marginBottom: "20px" }}>
              <MyInput
                type="password"
                label="New Password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <div style={{ marginBottom: "20px" }}>
              <MyInput
                type="password"
                label="Confirm Password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </Form.Group>

          <SuccessButton myval="Reset Password" type="submit" />
        </Form>
      )}
    </>
  );
};

export default OTPForm;
