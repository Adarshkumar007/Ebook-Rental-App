import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';

const App = () => {
  // const navigate = useNavigate();
  // const dispatch=useDispatch();

  
  const userType = useSelector(state => state.setUserType.USER_TYPE);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  
  return (
    
    <div className="d-flex flex-column min-vh-100">
    <div className="flex-grow-1">
      
    </div>
  </div>
   
  );
};

export default App;
