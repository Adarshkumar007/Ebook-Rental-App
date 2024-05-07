import ReviewModalIndividualReview from "./ReviewModalIndividualReview";
const ReviewModalContentRight = () => {
  return (
    <div className="all-reviews">
        <ReviewModalIndividualReview approved={true} />
        <ReviewModalIndividualReview approved={false} />
        <ReviewModalIndividualReview approved={true} />
        <ReviewModalIndividualReview approved={false} />
    </div>
  );
};

export default ReviewModalContentRight;
