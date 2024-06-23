import { useEffect, useState } from "react";
import myimage from "../images/image1.jpg";
import axios from "axios";
import { url } from "../../url";
const AdminRankCard = ({rank,book}) => {
  const [bookinfo,setBookinfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/bookinfo?bookId=${book._id}`);
        setBookinfo(response.data);
        console.log("ssd", response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [book._id]);
  return (
    <div className="AdminRankCard">
      <div className="RankNo My-Title-Style" style={{ fontWeight: "bold" }}>
        #{rank}
      </div>
      <div className="admin-book-rank-image">
        <img src={bookinfo.imageSrc} alt="" className="book-rank-image" />
      </div>
      <div className="Admin-Book-Rank-Details-Container">
        <div className="Admin-Book-Rank-Details">
          <div className="rank-book-title">{bookinfo.title}</div>
        </div>
        <div className="Admin-Book-Rank-Details">
          <div className="dmin-Book-earning">
            <div>Lifetime Earnings:</div>
            <div>₹{book.totalAmount / 100}</div>
          </div>
          <div className="dmin-Book-earning">
            <div>Total Subscribes:</div>
            <div>{book.count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRankCard;
