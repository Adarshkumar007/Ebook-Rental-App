import img1 from "../../images/officialphoto.jpg";
import img2 from "../../images/NoImage.png";
import AccountDetails from "./AccountDetails";
import SellerVerifyBadge from "./SellerVerifyBadge";
import { useState } from "react";

const BankAccount = ({ editable,setData,hasData, setWarning, formValues, setFormValues }) => {
  return (
    <div className="BankAccount">
      <img
        src={localStorage.getItem("sellerimageSrc")}
        alt="Your Photo"
        className="BankProfileImage SubContainer"
      />
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
