import React, { useState } from "react";
import { Form } from "react-bootstrap";
import MyFormLabel from "./MyFormLabel";
import MyFormInputs from "./MyFormInputs";
import { IoIosAddCircle } from "react-icons/io";

const AccountDetails = ({ editable, setWarning }) => {
  const labels = [
    "Account Holder Name",
    "Bank Name",
    "Account Number",
    "Branch",
    "IFSC Code",
    "MICR Code",
    "UPI Number",
    "Registered Phone No",
  ];

  const [noAccount, setNoAccount] = useState(true);

  const inputs = [
    { name: "name", placeholder: "Name" },
    { name: "bankname", placeholder: "Bank" },
    { name: "accountnumber", placeholder: "Account Number" },
    { name: "branch", placeholder: "Branch" },
    { name: "ifsc", placeholder: "IFSC" },
    { name: "micr", placeholder: "MICR" },
    { name: "upi", placeholder: "UPI Id" },
    { name: "phone", placeholder: "Phone Number" },
  ];

  const handleFocus = () => {
    if (!editable) {
      setWarning("Please Click On Edit Button");
    }
  };
  const handleAddBank=()=>{
    setNoAccount(false);
  }

  return (
    <>
      {noAccount ? (
        <div className="add-bank-account">
          <span className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill" onClick={handleAddBank}>
    
            <IoIosAddCircle className="rounded-circle me-1" size={25} />
            Add Bank Account Details
          </span>
        </div>
      ) : (
        <div className="AccountDetails">
          <div className="AccountDetails-side-Heading">
            {labels.map((label, index) => (
              <MyFormLabel key={index} label={label} />
            ))}
          </div>
          <div className="AccountDetails-values">
            <Form className="bank-form">
              {inputs.map((value, index) => (
                <MyFormInputs
                  key={index}
                  editable={editable}
                  values={value}
                  focus={handleFocus}
                />
              ))}
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountDetails;
