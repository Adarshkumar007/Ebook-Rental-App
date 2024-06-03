import React, { useEffect, useState } from "react";
import RankCard from "./RankCard";
import { Book } from "./Books";
import axios from "axios";
import { url } from "../../../url";

const Rank = () => {
  const [rank , setRank] = useState([]);
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
      
    } 
  }
  fetchData();
},[]);
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
