import React, { useState } from 'react';
import myimage from '../images/officialphoto.jpg';
import { url } from '../../url';
import axios from "axios";


const AdminSellerPhoto = ({image,seller,sStatus}) => {
  const [status,setStatus] = useState(sStatus==="verified"?"block":"unblock");
    console.log("status",status,sStatus);
  const handleOnClick=async ()=>{
    console.log("sdfsdfsdfsdfsdff",seller);
    try {
      const response = await axios.post(`${url}/updatesellerStatusblock`,{Id:seller,status:status} );
      setStatus(status==="unblock"?"block":"unblock")
      console.log("response",response);
    } catch (error) {
    } finally {
    }
  }
  return (
    <div className="Photo-button">
      <div className="Seller-Image shadows" >
        <img src={image} className="Seller-Image-pic" alt="sellerphoto" />
      </div>
      <button
        type="button"
        onClick={handleOnClick}
        className="btn btn-primary block-button"
        style={{ 
          '--bs-btn-padding-y': '.25rem', 
          '--bs-btn-padding-x': '.5rem', 
          '--bs-btn-font-size': '.75rem' ,
          width:"80%",
          height:"2rem",
          fontSize:"15px",
          backgroundColor:"red"
        }}
      >
        {status}
      </button>
    </div>
  );
};

export default AdminSellerPhoto;
