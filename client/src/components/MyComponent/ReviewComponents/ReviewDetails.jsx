import { useEffect, useState } from "react";
import ReviewCalculation from "./ReviewCalculation";
import StarCount from "./StarCount";
import axios from "axios";
import { url } from "../../../url";
import { useDispatch } from "react-redux";
import { CURRENT_RATING } from "../../../redux/actions/types";
const ReviewDetails = ({bookId}) => {
  
  const [reviewCounts,setReviewCounts] = useState([
    { count: 0, numStar: 5 },
    { count: 0, numStar: 4 },
    { count: 0, numStar: 3 },
    { count: 0, numStar: 2 },
    { count: 0, numStar: 1 },
  ]);
  const [avgRating ,setAvgRating] = useState(0);
  const [totalRating ,setTotalRating] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchReviewCounts = async () => {
      
      try {
        // Fetch review counts from the API
        const response = await axios.get(url+"/api/reviewCounts");
        setReviewCounts(response.data);
        const total = response.data.reduce((acc, curr) => acc + curr.count, 0);
        const avg = total / reviewCounts.length;
        setAvgRating(avg);
        setTotalRating(total);
      } catch (error) {
        console.error("Error fetching review counts:", error);
      }
    };

    if(bookId){
      fetchReviewCounts();
    }
    

  },[bookId]);
  const handleRatingSelection = (count) =>{
    dispatch({
      type: CURRENT_RATING,
      count: count,
    });
  }
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "10px" }}>
      <ReviewCalculation avgRating={avgRating} totalRating={totalRating} />
      {reviewCounts.map((review, index) => (
        <StarCount key={index} count={review.count} numStar={review.numStar} onClick={() => handleRatingSelection(review.numStar)} />
      ))}
    </div>
  );
};

export default ReviewDetails;
