import AllReviewStar from "../ReviewComponents/AllReviewStar";
const BookNameStar = ({bookInfo, review}) => {
  return (
    <div>
      <h4 className="Book-Title">{bookInfo.title}</h4>
      <div
        style={{
          color: "rgb(102 101 101 / 81%)",
          fontSize: "13px",
          fontWeight: "bold",
        }}
      >
        {review.createdAt}
      </div>
      <AllReviewStar rate={review.rating} />
    </div>
  );
};
export default BookNameStar;
