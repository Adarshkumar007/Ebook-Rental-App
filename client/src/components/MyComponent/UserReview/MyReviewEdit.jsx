import { useEffect, useState } from "react";
import ProfileImage from "../ProfileImage";
import MyReviewStar from "../ReviewComponents/MyReviewStar";
import SuccessButton from "../SuccessButton";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../../../url";
import { setActiveModal } from "../../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";


const MyReviewEdit = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");
  
  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };
  const currentReviewID=useSelector((state)=>state.currentReviewReducer.currentReview);

  const handleHoverChange = (currentRating) => {
    setHover(currentRating);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imageSrc = localStorage.getItem("imageSrc");
  const username = localStorage.getItem("username");
  const handleSubmit =async ()=>{
      try {
        const response = await axios.post(url + "/reviewupdate", {
          rating: rating,
          reviewID: currentReviewID,
          review: review
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        dispatch(setActiveModal(null,"user"));
        window.location.reload();
      } catch (error) {
        console.log("error updating review",error);
      }
  }
  return (
    <div className="MyReview-Container EditReviewContainer">
      <div className="Pic-Name">
        <ProfileImage
          image={imageSrc}
          handleSetFile={() => {}}
        />
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
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <SuccessButton myval={"Submit"} onClick={handleSubmit} />
    </div>
  );
};

export default MyReviewEdit;
