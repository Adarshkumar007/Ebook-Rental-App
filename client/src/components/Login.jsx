import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { login } from "../redux/actions/authActions";
import { sendOTP } from "../redux/actions/sendOTPAction";
import OTPForm from "./OTPForm";

import MyInput from "./MyComponent/MyInput";
import SuccessButton from "./MyComponent/SuccessButton";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "./Login.css";
import { SET_OTP_ERROR } from "../redux/actions/types";
import FormErrorDisplay from "./MyComponent/FormErrorDisplay";

const Login = ({ userType }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const error = useSelector((state) => state.auth.error) || "";
  const OTPerror = useSelector((state) => state.sendOTP.error) || "";
  const otpSent = useSelector((state) => state.sendOTP.otpSent) || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isForgotPassword) {
      console.log(email);
      dispatch(sendOTP(email, userType));
    } else {
      dispatch(login(email, password, userType));
    }
  };

  return (
    <>
      {!otpSent && (
        <Form onSubmit={handleSubmit}>
          {!isForgotPassword && error && (
            <div className="signUpAlert">
              <FormErrorDisplay message={error} type="error" />
            </div>
          )}
          {isForgotPassword && OTPerror && (
            <div className="error">
              <div className="signUpAlert">
                <FormErrorDisplay message={OTPerror} type="error" />
              </div>
            </div>
          )}
          {isForgotPassword && !otpSent && (
            <Form.Group controlId="email">
              <div style={{ marginBottom: "20px" }}>
                <MyInput
                  type="email"
                  label="Email Address"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>
              {/* <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
            </Form.Group>
          )}
          {isForgotPassword && otpSent && (
            <div>OTP sent to {email}. Please check your email.</div>
          )}
          {!isForgotPassword && (
            <>
              <Form.Group controlId="email">
                <div style={{ marginBottom: "20px" }}>
                  <MyInput
                    type="email"
                    label="Email Address"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                </div>
                {/* <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
              </Form.Group>

              <Form.Group controlId="password">
                <div style={{ marginBottom: "20px" }}>
                  <MyInput
                    type="password"
                    label="Password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update email state
                  />
                </div>
                {/* <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
              </Form.Group>

              <SuccessButton myval="Login" type="submit" />
              {/* <MyButton myval="Login" type="submit" /> */}
              {/* <Button variant="primary" type="submit">
               
               </Button> */}
              <Button
                variant="link"
                onClick={() => setIsForgotPassword(true)}
                className="signin-signup-nav-link"
              >
                Forgot Password?
              </Button>
            </>
          )}

          {isForgotPassword && !otpSent && (
            <SuccessButton myval="Send OTP" type="submit" marginTop={20} />
            // <MyButton myval="Send OTP" type="submit" marginTop={20} />

            // <Button variant="primary" type="submit">
            //   Send OTP
            // </Button>
          )}
          {isForgotPassword && (
            <Button
              variant="link"
              className="signin-signup-nav-link"
              onClick={() => {
                setIsForgotPassword(false);
                
                
                dispatch({
                  type: SET_OTP_ERROR,
                });
              }}
            >
              <AiOutlineArrowLeft className="pl-2" />
              Back to Login
            </Button>
          )}
        </Form>
      )}
      <>
        {otpSent && (
          <OTPForm setIsForgotPassword={setIsForgotPassword}></OTPForm>
        )}
      </>
    </>
  );
};

export default Login;
