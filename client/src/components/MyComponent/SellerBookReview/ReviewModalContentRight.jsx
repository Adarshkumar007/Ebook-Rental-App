import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import ReviewModalIndividualReview from "./ReviewModalIndividualReview";

const ReviewModalContentRight = ({ setCommentLoading }) => {
  const [reviews, setReviews] = useState([]);
  const currentRating = useSelector(
    (state) => state.currentratingvalue.currentRating
  );
  const bookId = useSelector((state) => state.currentBookID.currentBookID);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          url + `/api/reviews/${bookId}/${currentRating}`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setCommentLoading(false);
      }
    };

    if (bookId && currentRating != null) {
      fetchReviews();
    }
  }, [bookId, currentRating, setCommentLoading]);

  return (
    <div className="all-reviews">
      {reviews.map((review, index) => (
        <ReviewModalIndividualReview key={index} review={review} />
      ))}
    </div>
  );
  
};

export default ReviewModalContentRight;
