import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import MyFormLabel from "./MyFormLabel";
import MyFormInputs from "./MyFormInputs";
import { IoIosAddCircle } from "react-icons/io";

const AccountDetails = ({ editable, hasData,setData,setWarning, formValues, setFormValues }) => {
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

  const [noAccount, setNoAccount] = useState(hasData);

  const handleFocus = () => {
    if (!editable) {
      setWarning("Please Click On Edit Button");
    }
  };

  const handleAddBank = () => {
    setNoAccount(false);
    setData(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("sdjsjdhjbshdsd");
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editable) {
      setWarning(""); // Clear the warning when editable is true
    }
  }, [editable]);

  return (
    <>
      {noAccount ? (
        <div className="add-bank-account">
          <span
            className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill"
            onClick={handleAddBank}
          >
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
              {Object.keys(formValues).map((key, index) => (
                <MyFormInputs
                  key={index}
                  editable={editable}
                  values={{ name: key, placeholder: labels[index] }}
                  value={formValues[key]}
                  focus={handleFocus}
                  onChange={handleChange}
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
