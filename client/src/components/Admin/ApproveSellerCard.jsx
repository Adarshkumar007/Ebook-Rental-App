import React, { useEffect, useState } from "react";

import {
  MdOutlineMail,
  MdOutlineLocalPhone,
  MdOutlineDateRange,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import AdminApproveButton from "./AdminApproveButton";
import { url } from "../../url";
import axios from "axios";

const ApproveSellerCard = ({ newseller }) => {
  const [seller ,setSeller] = useState([]);
  const [status,setStatus] = useState("verifing");
  useEffect(()=>{
    const fetchPendingTransfers = async () => {
      try {
        const response = await axios.get(`${url}/get_sellerinfo`, {
          params: {
            sellerId: newseller._id 
          }
        });      setSeller(response.data);
        console.log("response",response);
      } catch (error) {
      } finally {
      }
    }
    fetchPendingTransfers();
  
  },[]);
  const handleOnClick=async ()=>{
    try {
      const response = await axios.post(`${url}/updatesellerStatus`,{Id:newseller._id} );
      setStatus("verifed")
      console.log("response",response);
    } catch (error) {
    } finally {
    }
  }
  return (
    <div className="seller-card">
      <div className="seller-image-container">
        <div className="seller-image-rounded">
          <img
            src={seller.imageSrc}
            className="seller-image card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="card-body seller-card-body">
        <div className="seller-card-name">{seller.username}</div>
        <div className="seller-details">
          <MdOutlineMail />
          <span>{seller.email}</span>
        </div>
        <div className="seller-details">
          <MdOutlineLocalPhone />
          <span>{seller.phone}</span>
        </div>
       
        <div className="seller-details">
          <IoLocationOutline />
          <span>{seller.address}</span>
        </div>
        <div className="seller-approve-button">
          <AdminApproveButton status={status} onClick={handleOnClick}/>
        </div>
      </div>
    </div>
  );
};

export default ApproveSellerCard;
