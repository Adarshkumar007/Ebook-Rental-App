import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/Footer';

const App = () => {
  useEffect(()=>{
    console.log("user");
},[]);
  return (
    
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <div className="flex-grow-1">
          
        </div>
        <FooterComponent />
      </div>
   
  );
};

export default App;
