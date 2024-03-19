import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { signup } from '../redux/actions/authActions';

const Signup = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error)|| "";
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(name, email, password));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>} 
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;
