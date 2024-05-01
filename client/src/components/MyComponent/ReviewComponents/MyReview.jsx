import { useEffect, useState } from "react";
import MyReviewStar from "./MyReviewStar";
import axios from 'axios';
import ReviewDetails from "./ReviewDetails";
import "../MyCSS/MyReview.css";
import SuccessButton from "../SuccessButton";
import { useSelector } from "react-redux";
import ProfileImage from "../ProfileImage";
import { url } from "../../../url";

const MyReview = ({bookId}) => {
  const [rating, setRating] = useState(null);
  const [review , setReview] = useState("");
  const [hover, setHover] = useState(null);
  const [currentRating ,setCurrentRating] = useState(5);
  const username =useSelector((state) => state.auth.username);
  const imageSrc = useSelector((state) =>state.auth.imageSrc);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };
  const handleHoverChange = (currentRating) => {
    setHover(currentRating);
  };
  const handleSetFile = () =>{
  }
  
  
  const handleOnClick = async () =>{
    if(isAuthenticated){
      if(!rating){
          console.log("invalid rating");
      }
      else{
      try {
        const res = await axios.post(url+'/rating',
         {
            rating:rating,
            review:review,
            bookId:bookId
         },
          {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log("update",res.data.message);
      } catch (err) {
      }
      }
    }
  }
  return (
    <div className="MyReview-Container">
      <div className="Pic-Name">
      <ProfileImage image={ useSelector((state) =>state.auth.imageSrc)} handleSetFile={handleSetFile}/>
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
          onChange={(event)=>setReview(event.target.value)}
        />
      </div>
      <SuccessButton myval={"Submit"} onClick={handleOnClick} />

      <ReviewDetails bookId={bookId}/>
    </div>
  );
};

export default MyReview;
