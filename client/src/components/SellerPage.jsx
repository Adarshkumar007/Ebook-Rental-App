import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUserTypeAction } from "../redux/actions/authActions";
import "./MyComponent/SellerHomePage/SellerHomePage.css";
import { Container } from "react-bootstrap";
import FirstSellerComponent from "./MyComponent/SellerHomePage/FirstSellerComponent";

const  Seller =()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(setUserTypeAction("seller"));
  },[]);;

  return (
    <Container>
      <div className="SellerHomeContainer">
        <FirstSellerComponent/>
      </div>
    </Container>
  );
};
export default Seller;
