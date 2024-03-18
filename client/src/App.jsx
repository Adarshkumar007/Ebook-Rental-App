import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavbarComponent></NavbarComponent>
    </Provider>
  );
};

export default App;
