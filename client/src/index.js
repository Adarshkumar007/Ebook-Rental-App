import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // assuming your main component is named App
import SellerPage from './components/SellerPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserProfile from './components/UserProfile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </Router>
  </Provider>
</React.StrictMode>
);
