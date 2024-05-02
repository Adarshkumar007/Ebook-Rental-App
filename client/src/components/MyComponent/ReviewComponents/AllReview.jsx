import { useEffect, useState } from "react";
import IndividualReview from "./IndividualReview";
import axios from "axios";
import { url } from "../../../url";
import { useSelector } from "react-redux";

const AllReview = ({bookId}) => {
  const [reviews, setReviews] = useState([]);
  const currentRating = useSelector((state)=>state.currentratingvalue.currentRating);
  useEffect(()=>{
    if(bookId){
      const fetchReviews = async () => {
        try {
          if (bookId) {
            // Fetch ratings and reviews based on bookId from the API
            const response = await axios.get(url+`/api/reviews/${bookId}/${currentRating}`);
            setReviews(response.data);
            console.log("sds",response.data); 
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
  
      fetchReviews();
    }
  },[bookId,currentRating]);
  return (
    <div className="all-review">
      {reviews.map((review, index) => (
        <IndividualReview key={index} review={review} />
      ))}
    </div>
  );
};

export default AllReview;
