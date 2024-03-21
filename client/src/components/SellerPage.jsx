import { useDispatch } from "react-redux";
import NavbarComponent from "./NavBar";
import { useEffect } from "react";
import { setUserTypeAction } from "../redux/actions/authActions";
import FooterComponent from "./Footer";

const  Seller =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setUserTypeAction("seller"));
    },[]);
    
    return (  
        <div className="d-flex flex-column min-vh-100">
        <NavbarComponent />
        <div className="flex-grow-1">
          {/* Your main content goes here */}
        </div>
        <FooterComponent />
      </div>
    )
}
export default Seller;