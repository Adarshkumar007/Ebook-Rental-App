import img1 from "../../images/officialphoto.jpg";
import img2 from "../../images/NoImage.png";
import AccountDetails from "./AccountDetails";
import SellerVerifyBadge from "./SellerVerifyBadge";
import { useState } from "react";

const BankAccount = ({ editable, setWarning }) => {
  const image = img1;

  // const [status, setStatus] = useState("Account Verified");
  const [status, setStatus] = useState("Account Verifying");
  // const [status, setStatus] = useState("Account Blocked");


  return (
    <div className="BankAccount">
      <div className="sellerphoto-status-container">
        <img
          src={image}
          alt="Your Photo"
          className="BankProfileImage SubContainer"
        />
        <div className="verification-status">
          <SellerVerifyBadge status={status}/>
        </div>
      </div>

      {/* <AccountDetails editable={editable}/> */}
      <AccountDetails editable={editable} setWarning={setWarning} />
    </div>
  );
};
export default BankAccount;
