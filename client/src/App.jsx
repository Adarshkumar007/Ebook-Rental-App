import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/footer';

const App = () => {
  useEffect(()=>{
    console.log("user");
},[]);
  return (
<<<<<<< Updated upstream
    <Provider store={store}>
      <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <div className="flex-grow-1">
          {/* Your main content goes here */}
        </div>
        <FooterComponent />
      </div>
    </Provider>
=======
    
      <NavbarComponent></NavbarComponent>
    
>>>>>>> Stashed changes
  );
};

export default App;
