import ReviewCalculation from "../ReviewComponents/ReviewCalculation";
import StarCount from "../ReviewComponents/StarCount";
import { useState } from "react";

const avgRating=4.5;
const totalRating=2345;

const ReviewModalContentLeft = () => {

    const [reviewCounts,setReviewCounts] = useState([
        { count: 0, numStar: 5 },
        { count: 0, numStar: 4 },
        { count: 0, numStar: 3 },
        { count: 0, numStar: 2 },
        { count: 0, numStar: 1 },
      ]);

  return (
    <div
    className="ReviewModalContentLeft"
    >
      <ReviewCalculation avgRating={avgRating} totalRating={totalRating}/>
      {reviewCounts.map((review, index) => (
        <StarCount
          key={index}
          count={123}
          numStar={review.numStar}
        />
      ))}
    </div>
  );
};
export default ReviewModalContentLeft;
