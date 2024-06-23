import { useEffect, useState } from "react";
import AdminRequestCard from "./AdminRequestCard";
import axios from "axios";
import { url } from "../../url";


const AdminRequestCardContainer = ({sellerId}) => {
  const [transferInfo,setTransferInfo] =useState([]);
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+'/gettransferrequests', {
        params: {
            sellerId:sellerId
        }

    });
    setTransferInfo(response.data.pendingPublisher);
    console.log("ssddeddeessd",response);
  } catch (error) {
      if (error.response) {
          if (error.response.status === 403) {
            console.error('Error 403: Forbidden');
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
    <div className="AdminRankPanel">
      {transferInfo&& transferInfo.map((amt, index) => (
        <AdminRequestCard key={index} amt={amt.amount}  id={amt._id} tstatus={amt.status} /> // Corrected component name
      ))}
    </div>
  );
};

export default AdminRequestCardContainer;
