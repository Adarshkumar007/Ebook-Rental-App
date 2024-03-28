import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';
import Swipper from './components/Swipper';
import { Container } from 'react-bootstrap';
import axios from 'axios';


const App = () => {
  const [ebook ,setEbook]=useState([]);
  const dispatch = useDispatch();
  dispatch(setUserTypeAction("user"));
  useEffect(() => {
    // Fetch user profile
    axios.get('http://localhost:5000/home')
    .then(response =>{ 
        console.log("xc",response.data);
        setEbook(response.data);
       
    })
    .catch(error =>{ 
      console.error('Error fetching profile:', error);
      }
    );
  }, []);
  return (
    
    // <div className="d-flex flex-column ">
    // <div className="flex-grow-1">
   
    <Container>
       
        <Swipper ebook={ebook}/>
        {/* <Swipper/>
        <Swipper/>
        <Swipper/> */}
      </Container>
  //   </div>
  // </div>
   
  );
};

export default App;
