import { useDispatch, useSelector } from "react-redux";
import ReviewCalculation from "../ReviewComponents/ReviewCalculation";
import StarCount from "../ReviewComponents/StarCount";
import { useEffect, useState } from "react";
import { url } from "../../../url";
import axios from "axios";
import { CURRENT_RATING } from "../../../redux/actions/types";

const ReviewModalContentLeft = ({ setReviewLoading }) => {
  const [reviewCounts, setReviewCounts] = useState([
    { count: 0, numStar: 5 },
    { count: 0, numStar: 4 },
    { count: 0, numStar: 3 },
    { count: 0, numStar: 2 },
    { count: 0, numStar: 1 },
  ]);
  const [avgRating, setAvgRating] = useState(0);
  const [totalRating, setTotalRating] = useState(0);
  const dispatch = useDispatch();
  const bookId = useSelector((state) => state.currentBookID.currentBookID);

  useEffect(() => {
    const fetchReviewCounts = async () => {
      try {
        const response = await axios.get(url + `/api/reviewCounts/${bookId}`);
        const data = response.data;
        setReviewCounts(data);

        const total = data.reduce((acc, curr) => acc + curr.count, 0);
        const weightedSum = data.reduce(
          (acc, curr) => acc + curr.count * curr.numStar,
          0
        );
        const avg = total ? weightedSum / total : 0;
        setAvgRating(avg.toFixed(1));
        setTotalRating(total);
      } catch (error) {
        console.error("Error fetching review counts:", error);
      } finally {
        setReviewLoading(false);
      }
    };

    if (bookId) {
      fetchReviewCounts();
    }
  }, [bookId, setReviewLoading]);

  const handleRatingSelection = (count) => {
    dispatch({
      type: CURRENT_RATING,
      count: count,
    });
  };

  return (
    <div className="ReviewModalContentLeft">
      <ReviewCalculation avgRating={avgRating} totalRating={totalRating} />
      {reviewCounts.map((review, index) => (
        <StarCount
          key={index}
          count={review.count}
          numStar={review.numStar}
          onClick={() => handleRatingSelection(review.numStar)}
        />
      ))}
    </div>
  );
};

export default ReviewModalContentLeft;
