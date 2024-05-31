import { useState } from "react";
import ProfileImage from "../ProfileImage";
import MyReviewStar from "../ReviewComponents/MyReviewStar";
import SuccessButton from "../SuccessButton";
import { Container } from "react-bootstrap";

const MyReviewEdit = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const handleRatingChange = (currentRating) => {
        setRating(currentRating);
      };
      const handleHoverChange = (currentRating) => {
        setHover(currentRating);
      };
  return (
    
    <div className="MyReview-Container EditReviewContainer">
      <div className="Pic-Name">
        <ProfileImage
          image=""
          handleSetFile={()=>{}}
        />
        <div className="Name-Rating">
          <h4>
            <span>Hello, </span>
            <span>Kn Ganesh</span>
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
          value=""
          onChange={() => {}}
        />
      </div>
      <SuccessButton myval={"Submit"} onClick={()=>{}} />
    </div>
    
  );
};

export default MyReviewEdit;
