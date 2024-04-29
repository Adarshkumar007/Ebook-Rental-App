import ReviewCalculation from "./ReviewCalculation";
import StarCount from "./StarCount";

const ReviewDetails = () => {
  const reviewCounts = [
    { count: 300, numStar: 5 },
    { count: 300, numStar: 4 },
    { count: 300, numStar: 3 },
    { count: 1123, numStar: 2 },
    { count: 20, numStar: 1 },
  ];

  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "10px" }}>
      <ReviewCalculation />
      {reviewCounts.map((review, index) => (
        <StarCount key={index} count={review.count} numStar={review.numStar} />
      ))}
    </div>
  );
};

export default ReviewDetails;
