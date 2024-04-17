import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';
import Swipper from './components/Swipper';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import {url} from '../src/url'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App = () => {
  
  const [ebook ,setEbook]=useState([]);
  const dispatch = useDispatch();
  dispatch(setUserTypeAction("user"));
  useEffect(() => {
    // Fetch user profile
    axios.get(url+'/api/home')
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
