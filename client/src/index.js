import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // assuming your main component is named App
import SellerPage from './components/SellerPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/Footer';
import UserProfile from './components/UserProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  
    <Router>
    <NavbarComponent />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  </Provider>
</React.StrictMode>
);
