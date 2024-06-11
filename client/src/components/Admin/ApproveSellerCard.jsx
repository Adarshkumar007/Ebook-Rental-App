import React from "react";

import {
  MdOutlineMail,
  MdOutlineLocalPhone,
  MdOutlineDateRange,
} from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import AdminApproveButton from "./AdminApproveButton";

const ApproveSellerCard = ({ newseller }) => {
  return (
    <div className="seller-card">
      <div className="seller-image-container">
        <div className="seller-image-rounded">
          <img
            src={newseller.myImage}
            className="seller-image card-img-top"
            alt="..."
          />
        </div>
      </div>
      <div className="card-body seller-card-body">
        <div className="seller-card-name">{newseller.name}</div>
        <div className="seller-details">
          <MdOutlineMail />
          <span>{newseller.email}</span>
        </div>
        <div className="seller-details">
          <MdOutlineLocalPhone />
          <span>{newseller.phone}</span>
        </div>
        <div className="seller-details">
          <MdOutlineDateRange />
          <span>{newseller.date}</span>
        </div>
        <div className="seller-details">
          <IoLocationOutline />
          <span>{newseller.address}</span>
        </div>
        <div className="seller-approve-button">
          <AdminApproveButton />
        </div>
      </div>
    </div>
  );
};

export default ApproveSellerCard;
