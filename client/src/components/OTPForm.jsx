import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNewLogin } from '../redux/actions/sendOTPAction';

const OTPForm = ( {setIsForgotPassword}) => {
  const [otp, setOTP] = useState('');
  const [error, setError] = useState('');
  const email = useSelector(state => state.sendOTP.email)||"";
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidOTP,setisValidOTP]=useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/verifyotp', {email, otp });
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
      const res = await axios.post('http://localhost:5000/api/resetpassword', { email, newPassword });
      setIsForgotPassword(false);
      dispatch(setNewLogin());
      console.log(res.data.message);
      
      // Handle success, maybe redirect to another page
    } catch (error) {
      console.error('Error resetting password:', error);
      
      setError('Failed to reset password. Please try again.');
    }
  }
  return (
    <>
    {!isValidOTP && <Form  onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="otp">
        <Form.Label>Enter OTP</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    }
    {
      isValidOTP && <Form onSubmit={handleNewPasswordSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="newPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Reset Password
      </Button>
    </Form>
    }
    </>
  );
};

export default OTPForm;
