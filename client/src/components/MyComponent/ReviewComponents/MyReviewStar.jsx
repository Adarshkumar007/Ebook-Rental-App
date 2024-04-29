import { FaStar } from "react-icons/fa";
const MyReviewStar = ({ rating, hover, onRatingChange, onHoverChange }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => onRatingChange(currentRating)}
            />
            <FaStar
              size={30}
              className="star"
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => onHoverChange(currentRating)}
              onMouseLeave={() => onHoverChange(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default MyReviewStar;
