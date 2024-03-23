import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';
import Swipper from './components/Swipper';
import { Container } from 'react-bootstrap';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch your action here
    dispatch(setUserTypeAction('user'));
  }, []);
  return (
    
    <div className="d-flex flex-column ">
    <div className="flex-grow-1">
      <Container>
        <Swipper/>
        <Swipper/>
        <Swipper/>
        <Swipper/>
        <Swipper/>
      </Container>
    </div>
  </div>
   
  );
};

export default App;
