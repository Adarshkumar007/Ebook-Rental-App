import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { url } from "../../../url";
import ReviewModalIndividualReview from "./ReviewModalIndividualReview";
const ReviewModalContentRight = () => {
  const [reviews, setReviews] = useState([]);
  const currentRating = useSelector((state)=>state.currentratingvalue.currentRating);
  const bookId  = useSelector((state)=>state.currentBookID.currentBookID);
  useEffect(()=>{
    if(bookId){
      
      const fetchReviews = async () => {
        try {
          if (bookId) {
            console.log("sds",bookId,currentRating); 

            // Fetch ratings and reviews based on bookId from the API
            const response = await axios.get(url+`/api/reviews/${bookId}/${currentRating}`);
            setReviews(response.data);
            console.log(response.data);
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
  
      fetchReviews();
    }
  },[bookId,currentRating]);
  return (
    reviews.map((review, index) => (
      <div key={index} className="all-reviews">
          <ReviewModalIndividualReview review={review} />
      </div>
    ))
  );
};

export default ReviewModalContentRight;
