import img1 from "../../images/officialphoto.jpg";
import img2 from "../../images/NoImage.png";
import AccountDetails from "./AccountDetails";
import SellerVerifyBadge from "./SellerVerifyBadge";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";

const BankAccount = ({ editable,setData,hasData, setWarning, formValues, setFormValues }) => {
  const [status,setStatus] =useState("blocked");
  useEffect(()=>{
    const fetchdata= async()=>{
      try {
        const response= await axios.get(url+"/getsellerstatus", {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("sellertoken")}`
          }
          
      });
      setStatus(response.data);
        console.log("fsdfdsf",response);
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchdata();
  },[]);

  return (
    <div className="BankAccount">
            <div className="sellerphoto-status-container">
      <img
        src={localStorage.getItem("sellerimageSrc")}
        alt="Your Photo"
        className="BankProfileImage SubContainer"
      />
      <div className="verification-status">
          <SellerVerifyBadge status={status}/>
        </div>
    </div>
      <AccountDetails
        editable={editable}
        setData={setData}
        formValues={formValues}
        setFormValues={setFormValues}
        setWarning={setWarning}
        hasData={hasData}
      />
            </div>
  );
};

export default BankAccount;
