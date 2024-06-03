import axios from "axios";
import { url } from "../../../url";
import { useEffect, useState } from "react";

const RankCard = ({rank, book}) => {
  const [bookinfo ,setBookinfo] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
    try {
      const response = await axios.get(url+`/bookinfo?bookId=${book._id}`);
    setBookinfo(response.data);
    console.log("ssd",response);
  } catch (error) {
      
    } 
  }
  fetchData();
},[]);
  return (
    <div className="RankCard SubContainer">
        <div className="RankNo My-Title-Style">
            #{rank}
        </div>
      <div className="RankCardImage SubContainer">
        <img src={bookinfo.imageSrc} alt="book" className="rankimage" />
      </div>
      <div className="RankCardInfo">
        <div className="Rank-Book-Name">{bookinfo.title}</div>
        <div className="BookStats">
          <div>Total Earning: ₹{book.totalAmount/100}</div>
          <div>Total Subscribes: {book.count}</div>
        </div>
      </div>
      
    </div>
  );
};
export default RankCard;
