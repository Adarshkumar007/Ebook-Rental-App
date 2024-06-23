import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { setActiveModal, signup } from "../redux/actions/authActions";
import MyInput from "./MyComponent/MyInput";
import MyTextArea from "./MyComponent/MyTextArea";
import SuccessButton from "./MyComponent/SuccessButton";
import ProfileImage from "./MyComponent/ProfileImage";
import OtpInput from "./MyComponent/OtpInput";
import { SIGNUP_FAILURE } from "../redux/actions/types";
import FormErrorDisplay from "./MyComponent/FormErrorDisplay";

const Signup = ({ userType }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error) || "";
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [OTP, setOTP] = useState("");
  const [profile_image, setFile] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleVerification = () => {
    setIsVerified(true);
  };

  const handleSetFile = (file) => {
    setFile(file);
  };

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name.trim());
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);
  const validatePin = (pin) => /^\d{6}$/.test(pin);
  const validateOTP = (otp) => /^\d{4}$/.test(otp);
  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/.test(
      password
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUsername = username.trim();
    const capitalizedUsername =
      trimmedUsername.charAt(0).toUpperCase() + trimmedUsername.slice(1);

    if (!capitalizedUsername) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Name is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validateName(capitalizedUsername)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Name should contain only alphabets and spaces.",
      });
      setSuccessMessage("");
      return;
    }
    if (!email) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Email is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validateEmail(email)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Please enter a valid email address.",
      });
      setSuccessMessage("");
      return;
    }
    if (!phone) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Phone number is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validatePhone(phone)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Phone number should be 10 digits.",
      });
      setSuccessMessage("");
      return;
    }
    if (!password) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Password is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validatePassword(password)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload:
          "Password should be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.",
      });
      setSuccessMessage("");
      return;
    }
    if (!address) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Address is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!pin) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Pincode is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validatePin(pin)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Pincode should be 6 digits.",
      });
      setSuccessMessage("");
      return;
    }
    if (!OTP) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "OTP is required.",
      });
      setSuccessMessage("");
      return;
    }
    if (!validateOTP(OTP)) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "OTP should be 4 digits.",
      });
      setSuccessMessage("");
      return;
    }

    if (!isVerified) {
      dispatch({
        type: SIGNUP_FAILURE,
        payload: "Verify your email address.",
      });
      setSuccessMessage("");
      return;
    }

    dispatch(
      signup(
        capitalizedUsername,
        email,
        password,
        address,
        pin,
        phone,
        profile_image,
        userType
      )
    );
    dispatch(setActiveModal("SignUpSuccess",userType));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ProfileImage handleSetFile={handleSetFile} />
      {(error || successMessage) && (
        <div className="signUpAlert">
          <FormErrorDisplay
            message={error || successMessage}
            type={error ? "error" : "success"}
          />
        </div>
      )}
      <Form.Group controlId="name">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyInput
            type="text"
            label=""
            placeholder="Enter name"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="email">
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyInput
            type="email"
            label=""
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="otp">
        <div style={{ marginBottom: "10px" }} className="otpinput">
          <OtpInput
            type="text"
            placeholder="Enter OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
            email={email}
            handleVerification={handleVerification}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="phone">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyInput
            type="text"
            label=""
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="password">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyInput
            type="password"
            label=""
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="address">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyTextArea
            label=""
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="pin">
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <MyInput
            type="text"
            label=""
            placeholder="Enter pincode"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
      </Form.Group>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SuccessButton myval="Sign Up" type="submit" />
      </div>
    </Form>
  );
};

export default Signup;
