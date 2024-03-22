import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { signup } from '../redux/actions/authActions';

import MyInput from "./MyComponent/MyInput";
import MyButton from "./MyComponent/MyButton";

const Signup = ({userType}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error)|| "";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password,userType));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>} 
      <Form.Group controlId="name">
      <div style={{ marginBottom: "20px" }}>
      <MyInput
                  type="text"
                  label="Name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} // Update email state
                />
                </div>
        {/* <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} /> */}
      </Form.Group>

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
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update email state
                />
                </div>
        {/* <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
      </Form.Group>
      <MyButton myval="Sign Up" type="submit" />
      {/* <Button variant="primary" type="submit">
        Sign Up
      </Button> */}
    </Form>
  );
};

export default Signup;
