import React, { useEffect, useState } from "react";
import RankCard from "./RankCard";
import { Book } from "./Books";
import axios from "axios";
import { url } from "../../../url";
import { logout, setActiveModal } from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const Rank = () => {
  const [rank , setRank] = useState([]);
  const dispatch = useDispatch();
            
  const isSellerAuthenticated=useSelector((state)=>state.sellerauth.isAuthenticated)
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+'/bookrank', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("sellertoken")}`
        }

    });
    setRank(response.data);
    console.log("ssdssd",response);
  } catch (error) {
      if (error.response) {
          if (error.response.status === 403) {
            console.error('Error 403: Forbidden');
            dispatch(logout("seller"));
            localStorage.setItem("sellerimageSrc",null);
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
},[isSellerAuthenticated]);
  return (
    <div className="shadows Rank">
      <div className="Wallet-Main-Title My-Title-Style">Book Rank</div>
      <div className="RankDetails">
        {rank && rank.map((book,index) => (
          <RankCard key={index+1} rank={index+1} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Rank;
