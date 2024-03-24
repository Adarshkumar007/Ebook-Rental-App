import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { signup } from "../redux/actions/authActions";

import MyInput from "./MyComponent/MyInput";
import MyTextArea from "./MyComponent/MyTextArea";
import SuccessButton from "./MyComponent/SuccessButton";
import ProfileImage from "./MyComponent/ProfileImage";
import OtpInput from "./MyComponent/OtpInput";

const Signup = ({ userType }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error) || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password, userType));
  };

  return (
    <Form onSubmit={handleSubmit}>
     
      <ProfileImage/>
      {error && <div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>{error}</div>}
      <Form.Group controlId="name">
        <div style={{ marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <MyInput
            type="text"
            label=""
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update email state
          />
        </div>
        {/* <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} /> */}
      </Form.Group>

      <Form.Group controlId="email">
        <div style={{  marginBottom: "10px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="email"
            label=""
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
      </Form.Group>
      <Form.Group controlId="email">
  <div style={{ marginBottom: "20px" }}>
    <OtpInput
      type="number"
      placeholder="Enter OTP"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
</Form.Group>


      <Form.Group controlId="phone">
        <div style={{  marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="tel"
            label=""
            placeholder="Enter phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
      </Form.Group>

      <Form.Group controlId="password">
        <div style={{  marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="password"
            label=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update email state
          />
        </div>
      </Form.Group>


      <Form.Group controlId="address">
        <div style={{  marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyTextArea
            type="text"
            label=""
            placeholder="Enter Your Complete Address"
            value={password} // This should be the address value, not password
            onChange={(e) => setPassword(e.target.value)} // Update address state
          />
        </div>
      </Form.Group>

      <Form.Group controlId="Pin">
        <div style={{ marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="number"
            label=""
            placeholder="Enter Pincode"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update email state
          />
        </div>
      </Form.Group>
      <div style={{ display:"flex",justifyContent:"center",alignItems:"center" }}>
      <SuccessButton myval="Sign Up" type="submit" />
      </div>
      {/* <MyButton myval="Sign Up" type="submit" /> */}
      {/* <Button variant="primary" type="submit">
        Sign Up
      </Button> */}

    </Form>
  );
};

export default Signup;
