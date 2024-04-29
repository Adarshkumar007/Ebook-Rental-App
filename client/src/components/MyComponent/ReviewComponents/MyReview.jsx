import { useState } from "react";
import MyReviewPicture from "./MyReviewPicture";
import MyReviewStar from "./MyReviewStar";
import ReviewDetails from "./ReviewDetails";
import "../MyCSS/MyReview.css";
import SuccessButton from "../SuccessButton";
import { useSelector } from "react-redux";
import ProfileImage from "../ProfileImage";

const MyReview = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const username =useSelector((state) => state.auth.username);
  const imageSrc = useSelector((state) =>state.auth.imageSrc);
   console.log(imageSrc,"ewfsdf");
  

  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };
  const handleHoverChange = (currentRating) => {
    setHover(currentRating);
  };
  const handleSetFile = () =>{
  }
  return (
    <div className="MyReview-Container">
      <div className="Pic-Name">
      <ProfileImage image={imageSrc} handleSetFile={handleSetFile}/>
        <div className="Name-Rating">
          <h4>
            <span>Hello, </span>
            <span>{username}</span>
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
