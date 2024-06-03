import React from 'react';
import { Form } from 'react-bootstrap';
import MyFormLabel from './MyFormLabel';
import MyFormInputs from './MyFormInputs';


const AccountDetails = ({ editable, setWarning }) => {
  const labels=[
    "Account Holder Name","Bank Name","Account Number","Branch","IFSC Code","MICR Code","UPI Number","Registered Phone No"
  ];

  const inputs = [
    { name: "name", placeholder: "Name" },
    { name: "bankname", placeholder: "Bank" },
    { name: "accountnumber", placeholder: "Account Number" },
    { name: "branch", placeholder: "Branch" },
    { name: "ifsc", placeholder: "IFSC" },
    { name: "micr", placeholder: "MICR" },
    { name: "upi", placeholder: "UPI Id" },
    { name: "phone", placeholder: "Phone Number" }
  ];

  const handleFocus=()=>{
    if(!editable){
      setWarning("Please Click On Edit Button");
    }
  };
    return (
      
        <div className="AccountDetails">
            <div className="AccountDetails-side-Heading">
              {labels.map((label,index)=> <MyFormLabel key={index} label={label}/> )}
               
            </div>
            <div className="AccountDetails-values">
                <Form className="bank-form">
                  {inputs.map((value,index) => <MyFormInputs key={index} editable={editable} values={value} focus={handleFocus}/>)}
                  
                </Form>
            </div>
        </div>
        

    );
};

export default AccountDetails;
