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
        <div className="flex-grow-1">
          
        </div>
      </div>
    )
}
export default Seller;