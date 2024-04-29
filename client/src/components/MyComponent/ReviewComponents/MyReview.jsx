import { useState } from "react";
import MyReviewPicture from "./MyReviewPicture";
import MyReviewStar from "./MyReviewStar";
import ReviewDetails from "./ReviewDetails";
import "../MyCSS/MyReview.css";
import SuccessButton from "../SuccessButton";

const MyReview = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };

  const handleHoverChange = (currentRating) => {
    setHover(currentRating);
  };

  console.log(rating);
  return (
    <div className="MyReview-Container">
      <div className="Pic-Name">
        <MyReviewPicture  Profiepic={"Profie-pic"}/>
        <div className="Name-Rating">
          <h4>
            <span>Hello, </span>
            <span>KN Ganesh</span>
          </h4>
          <MyReviewStar
            rating={rating}
            hover={hover}
            onRatingChange={handleRatingChange}
            onHoverChange={handleHoverChange}
          />
        </div>
      </div>

      <div className="write-Review">
        <textarea
          className="MyReview-content"
          placeholder="Write your review..."
        />
      </div>
      <SuccessButton myval={"Submit"} />

      <ReviewDetails/>
    </div>
  );
};

export default MyReview;
