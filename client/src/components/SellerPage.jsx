import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import NavbarComponent from "./NavBar";
import { useEffect } from "react";
import { setUserTypeAction } from "../redux/actions/authActions";

const  Seller =()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setUserTypeAction("seller"));
    },[]);
    
    return (  
        <NavbarComponent>

        </NavbarComponent>
    )
}
export default Seller;