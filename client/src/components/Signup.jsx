import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { signup } from "../redux/actions/authActions";

import MyInput from "./MyComponent/MyInput";
import MyTextArea from "./MyComponent/MyTextArea";
import SuccessButton from "./MyComponent/SuccessButton";
import ProfileImage from "./MyComponent/ProfileImage";
import OtpInput from "./MyComponent/OtpInput";
import { SIGNUP_FAILURE } from "../redux/actions/types";

const Signup = ({ userType }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error) || "";
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [pin , setPin] = useState("");
  const [OTP, setOTP] = useState("");
  const [profile_image,setFile] = useState(null);
  const [isVerified,setIsVerified] = useState(false);
  const handleVarifcation = () => {
    setIsVerified(true);
  }
  const handleSetFile= (file)=>{
    console.log("file");
    setFile(file);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isVerified){
    dispatch(signup(username, email, password, address, pin, phone,profile_image, userType));
    }
    else{
      dispatch({
        type:SIGNUP_FAILURE,
        payload:"Vearify your email address"
      })
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
     
      <ProfileImage  handleSetFile={handleSetFile}/>
      {error && <div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center",color: "red"}}>{error}</div>}
      <Form.Group controlId="name">
        <div style={{ marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <MyInput
            type="text"
            label=""
            placeholder="Enter name"
            value={username}
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
      <Form.Group controlId="OTP">
  <div style={{ marginBottom: "20px" }}>
    <OtpInput
      type="number"
      placeholder="Enter OTP"
      value={OTP} 
      email={email}
      handleVarifcation={handleVarifcation}
      onChange={(e) => setOTP(e.target.value)}
    />
  </div>
</Form.Group>


      <Form.Group controlId="phone">
        <div style={{  marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="tel"
            label=""
            placeholder="Enter phone Number"
            value={phone}
            
            onChange={(e) => setPhone(e.target.value)} // Update email state
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
            value={address} // This should be the address value, not password
            onChange={(e) => setAddress(e.target.value)} // Update address state
          />
        </div>
      </Form.Group>

      <Form.Group controlId="Pin">
        <div style={{ marginBottom: "20px" ,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
          <MyInput
            type="number"
            label=""
            placeholder="Enter Pincode"
            value={pin}
            onChange={(e) => setPin(e.target.value)} // Update email state
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
