import axios from "axios";
import { url } from "../../../url";
import { useState } from "react";

const WithdrawButton=()=>{
  const handleClick = async () =>{
  
try {
  const response = await axios.post(
    `${url}/withdraw`,
    {}, // You can put your POST data here if needed
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("sellertoken")}`,
      },
    }
  );
  
  console.log("success request");
} catch (error) {
  console.log("error in withdraw");
}
      
}
    return(<button
    className="btn btn-success WithdrawButton"
    type="submit"
    value="Withdraw"
    
    style={{
      fontFamily: '"DM Sans", sans-serif',
    }}
    onClick={handleClick}
  >
    Withdraw
  </button>)

}
export default WithdrawButton;