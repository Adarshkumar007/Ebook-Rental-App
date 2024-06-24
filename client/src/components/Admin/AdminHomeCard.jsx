import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  MdOutlineMail,
  MdOutlineLocalPhone,
  MdOutlineDateRange,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { url } from "../../url";

const AdminHomeCard = ({ newseller }) => {
  const navigate = useNavigate();
  const [seller ,setSeller] = useState([]);
  

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
  const handleCardClick = () => {
    navigate(`/admin/SellerDetails/${newseller._id}`);
  };

  return (
    <div className="seller-card Seller-Card-Home" onClick={handleCardClick}>
      <div className="seller-image-container">
        <div className="seller-image-rounded">
          <img
            src={seller.imageSrc}
            className="seller-image seller-image-home card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="card-body seller-card-body">
        <div className="seller-card-name">{newseller.name}</div>
        <div className="seller-details">
          <MdOutlineMail />
          <span>{seller.email}</span>
        </div>
        <div className="seller-details">
          <MdOutlineLocalPhone />
          <span>{seller.phone}</span>
        </div>
        <div className="seller-details">
          <MdOutlineDateRange />
          <span>{seller.username}</span>
        </div>
        <div className="seller-details">
          <IoLocationOutline />
          <span>{seller.address}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeCard;
