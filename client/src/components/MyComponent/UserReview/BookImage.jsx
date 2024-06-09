import "../MyCSS/UserReview.css";
import LoadingSpinner from "../LoadingSpinner";
const BookImage = ({ bookInfo, loading }) => {
  return (
    <>
      {loading ? (
        <div className="review-book">
          <LoadingSpinner />
        </div>
      ) : (
        <img src={bookInfo.imageSrc} className="review-book" />
      )}
    </>
  );
};
export default BookImage;
