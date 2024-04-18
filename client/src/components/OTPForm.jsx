import React, { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP, setNewLogin } from '../redux/actions/sendOTPAction';

import SuccessButton from './MyComponent/SuccessButton';
import MyInput from './MyComponent/MyInput';
import {url} from '../url';
const OTPForm = ( {setIsForgotPassword}) => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const email = useSelector(state => state.sendOTP.email)||"";
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidOTP,setisValidOTP]=useState(false);
  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url+'/api/verifyotp', {email, otp });
      console.log(res.data.message);
      setisValidOTP(true);
      setError("");
    } catch (error) {
      console.error('Error validating OTP:', error);
      setisValidOTP(false);
      setError('Failed to validate OTP. Please try again.');
    }
  };
  const handleNewPasswordSubmit=async(e)=>{
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try { 
      console.log(email,newPassword);
      const res = await axios.post('http://localhost:5000/api/resetpassword', { email, newPassword ,userType });
      setIsForgotPassword(false);
      dispatch(setNewLogin());
      console.log(res.data.message);
      
      // Handle success, maybe redirect to another page
    } catch (error) {
      console.error('Error resetting password:', error);
      
      setError('Failed to reset password. Please try again.');
    }
  }
  const handleResendOTP =async(e)=>{
    e.preventDefault();
    console.log("resend");
    dispatch(sendOTP(email));
  }
  return (
    <>
    {!isValidOTP && <Form  onSubmit={handleSubmit}>
      {error && <Alert variant="danger"><div className="error" style={{ color: "red" }}>{error}</div></Alert>}
      
      <Form.Group controlId="password">
        <div style={{  marginBottom: "20px" }}>
          <MyInput
            type="text"
            label="Enter OTP"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>
      </Form.Group>
      {/* <Form.Group controlId="otp">
        <Form.Label>Enter OTP</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
      </Form.Group> */}
      <div style={{ display:"flex",gap:"5px"}}>
      <SuccessButton myval="Submit" type="submit" />

      <button  className="btn btn-secondary" onClick={handleResendOTP } style={{ border:'1px solid #000d42'}}>
        Re-send OTP
      </button>
      </div>
    </Form>
    }
    {
      isValidOTP && <Form onSubmit={handleNewPasswordSubmit}>
      {error && <Alert variant="danger"><div className="error" style={{ color: "red" }}>{error}</div></Alert>}
      <Form.Group controlId="password">
        <div style={{  marginBottom: "20px" }}>
          <MyInput
           type="password"
            label="New Password"
            placeholder="Enter new password"
            value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="password">
        <div style={{  marginBottom: "20px" }}>
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
    }
    </>
  );
};

export default OTPForm;
