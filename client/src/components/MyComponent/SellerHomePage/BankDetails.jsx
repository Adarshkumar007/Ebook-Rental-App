import { PiBankBold } from "react-icons/pi";
import BankAccount from "./BankAccount";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
const BankDetails = () => {
    const [editable,setEditable]=useState(false);
    const handleBankDetailsEdit=()=>{
        setEditable(true);
    }
  return (
    <div className="BankDetails SubContainer">
      <div className="BankDetails-Title My-Title-Style">
        <PiBankBold size={20} />
        <span> Bank Details</span>
        {!editable &&<FaRegEdit size={20} style={{marginLeft:"auto",marginRight:"0"}}  onClick={handleBankDetailsEdit}/>}
      </div>
      <BankAccount editable={editable}/>
    </div>
  );
};

export default BankDetails;
