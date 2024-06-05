import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import LoadingSpinner from "../LoadingSpinner";

const RankCard = ({ rank, book }) => {
  const [bookinfo, setBookinfo] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/bookinfo?bookId=${book._id}`);
        setBookinfo(response.data);
        setFetching(false); // Set fetching to false after data is fetched
        console.log("ssd", response);
      } catch (error) {
        setFetching(false); // Set fetching to false in case of an error
        console.error(error);
      }
    };
    fetchData();
  }, [book._id]);

  return (
    <div className="RankCard SubContainer">
      {fetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="RankNo My-Title-Style">
            #{rank}
          </div>
          <div className="RankCardImage SubContainer">
            <img src={bookinfo?.imageSrc} alt="book" className="rankimage" />
          </div>
          <div className="RankCardInfo">
            <div className="Rank-Book-Name">{bookinfo?.title}</div>
            <div className="BookStats">
              <div>Total Earning: ₹{book.totalAmount / 100}</div>
              <div>Total Subscribes: {book.count}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RankCard;
