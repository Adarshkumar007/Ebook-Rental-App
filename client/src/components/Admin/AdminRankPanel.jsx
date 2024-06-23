import { useEffect, useState } from "react";
import AdminRankCard from "./AdminRankCard";
import { url } from "../../url";
import axios from "axios";

const AdminRankPanel = ({sellerId}) => {
  const [rank ,setRank] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+'/admin/bookrank', {
        params: {
            sellerId:sellerId
        }

    });
    setRank(response.data);
    console.log("ssdssd",response);
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
      
      {rank && rank.map((book,index) => (
          <AdminRankCard key={index} rank={index+1} book={book} />
        ))}
    </div>
  );
};
export default AdminRankPanel;
