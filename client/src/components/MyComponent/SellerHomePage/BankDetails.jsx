import { PiBankBold } from "react-icons/pi";
import BankAccount from "./BankAccount";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import MyFormButton from "./MyFormButton";
import AlertBadge from "./AlertBadge";

const BankDetails = () => {
  const [editable, setEditable] = useState(false);
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");

  const handleBankDetailsEdit = () => {
    setEditable(true);
    setWarning("");
    setSuccess(""); 
  };

  const handleSave = () => {
    setEditable(false);
    setWarning("");
    setSuccess("Information Saved Successfully");

 
    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  useEffect(() => {
    if (warning.length !== 0) {
      setSuccess(""); 
    }
  }, [warning]);

  useEffect(() => {
    if (success.length !== 0) {
      setWarning("");
    }
  }, [success]);

  return (
    <div className="BankDetails SubContainer">
      <div className="BankDetails-Title My-Title-Style">
        <PiBankBold size={20} />
        <span> Bank Details</span>
        {warning.length !== 0 && (
          <AlertBadge
            type="badge bg-warning-subtle text-warning-emphasis rounded-pill"
            msg={warning}
          />
        )}
        {success.length !== 0 && (
          <AlertBadge
            type="badge bg-success-subtle text-success-emphasis rounded-pill"
            msg={success}
          />
        )}

        {!editable ? (
          <FaRegEdit
            size={20}
            style={{ marginLeft: "auto", marginRight: "0" }}
            onClick={handleBankDetailsEdit}
          />
        ) : (
          <MyFormButton save={handleSave} />
        )}
      </div>
      <BankAccount editable={editable} setWarning={setWarning} />
    </div>
  );
};

export default BankDetails;
