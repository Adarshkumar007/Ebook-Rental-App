import { GiMoneyStack } from "react-icons/gi";
import WithdrawButton from "./WithdrawButton";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { url } from "../../../url";
import axios from "axios";
import { logout, setActiveModal } from "../../../redux/actions/authActions";
const WithdrawalComponent = () => {
  const [learnings , setLEarnings] = useState([]);
  const [cearnings , setCEarnings] = useState([]);

  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+'/learnings', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("sellertoken")}`
        }

    });
    setLEarnings(response.data.data);
    console.log("weweedssd",response.data);
  } catch (error) {
      if (error.response) {
          if (error.response.status === 403) {
            console.error('Error 403: Forbidden');
            dispatch(logout("seller"));
            dispatch(setActiveModal("login","seller"));
          } else {
            console.error(`Error ${error.response.status}: ${error.response.statusText}`);
            // Handle other errors
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
    } 
  }
  fetchData();
},[]);
useEffect(()=>{
  const fetchData = async () => {
  try {
    const response = await axios.get(url+'/cearnings', {
      headers: {
          Authorization: `Bearer ${localStorage.getItem("sellertoken")}`
      }

  });
  setCEarnings(response.data);
  console.log("amjd",response);
} catch (error) {
    if (error.response) {
        if (error.response.status === 403) {
          console.error('Error 403: Forbidden');
          dispatch(logout("seller"));
          dispatch(setActiveModal("login","seller"));
        } else {
          console.error(`Error ${error.response.status}: ${error.response.statusText}`);
          // Handle other errors
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
      }
  } 
}
fetchData();
},[]);
  return (
    <div className="withdrwal-component SubContainer">
      <div className="BankDetails-Title My-Title-Style">
        <GiMoneyStack size={20} />
        <span> Earnings</span>
      </div>
      <div className="Earning-Details">
        <div className="Earning-Subdetails">
          <div className="Earning-Subdetail">
            <div>Lifetime Earning:</div>
            <div>{(learnings.totalSum)/100}</div>
          </div>
          <div className="Earning-Subdetail">
            <div>Lifetime Subscribes:</div>
            <div>{learnings.count}</div>  
          </div>
        </div>
        <div className="Earning-Subdetails">
          <div className="Earning-Subdetail">
            <div>Current Earning:</div>
            <div>{cearnings/100}</div>
          </div>
          <div className="Earning-Subdetail earning-subdetails">
            <WithdrawButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WithdrawalComponent;
