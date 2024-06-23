import { PiBankBold } from "react-icons/pi";
import BankAccount from "./BankAccount";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import MyFormButton from "./MyFormButton";
import AlertBadge from "./AlertBadge";
import axios from "axios";
import { url } from "../../../url";

const BankDetails = () => {
  const [editable, setEditable] = useState(false);
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    bankname: "",
    accountnumber: "",
    branch: "",
    ifsc: "",
    micr: "",
    upi: "",
    phone: "",
  });
  const [hasData,setData]=useState(false);
  useEffect(()=>{
    const fetchData = async() =>{

      try {
        const response = await axios.get(url + "/getaccountinfo", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("sellertoken")}`, // or just `Bearer ${token}` if you're using JWT
          },
        });   
        if (response.status === 200) {
          if (response.data && Object.keys(response.data).length > 0) {
            const { _id, ...dataWithoutId } = response.data[0];
            setFormValues(dataWithoutId);
            setData(true);
          } else {
            console.log('No account info found');
            // Handle the case where no account info is returned
          }
        }
       } catch (error) {
        
      }
    }
    fetchData();
  },[])
  const handleBankDetailsEdit = () => {
    setEditable(true);
    setWarning("");
    setSuccess("");
  };

  const handleSave = async () => {
    setEditable(false);
    try {
      const response = await axios.post(url + "/setaccountinfo",formValues, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("sellertoken")}`, // or just `Bearer ${token}` if you're using JWT
        },
      });   
      setWarning("");
      setSuccess("Information Saved Successfully");
     } catch (error) {
      setSuccess("");
      setWarning("Failed to Save Information ");
      
    }
   

    setTimeout(() => {
      setSuccess("");
    }, 2000);
  };

  const handleFormValues = (formValue) => {
    setFormValues(formValue);
    console.log("value",formValues)
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

{hasData && (
  !editable ? (
    <FaRegEdit
      size={20}
      style={{ marginLeft: "auto", marginRight: "0" }}
      onClick={handleBankDetailsEdit}
    />
  ) : (
    <MyFormButton save={handleSave} />
  )
)}

      </div>
      <BankAccount
        editable={editable}
        formValues={formValues}
        setFormValues={handleFormValues}
        setWarning={setWarning}
        setData={setData}
        hasData={hasData}
      />
    </div>
  );
};

export default BankDetails;
