import MyReviewPicture from "./MyReviewPicture";
import AllReviewStar from "./AllReviewStar";
import Like from "./Like";
import Dislike from "./Dislike";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileImage from "../ProfileImage";
import {url} from '../../../url';
const AllReviewProfile = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes);
  const handleLikeButton = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
      //disable  Dislike
      if (disliked) {
        setDislikeCount((prevCount) => prevCount - 1);
        setDisliked(false);
      }
    }
  };

  //Dislike handling
  const [disliked, setDisliked] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(review.dislikes);
  const [userInfo ,setuserInfo] = useState({});
  const handleDislikeButton = () => {
    if (disliked) {
      setDislikeCount((prevCount) => prevCount - 1);
      setDisliked(false);
    } else {
      setDislikeCount((prevCount) => prevCount + 1);
      setDisliked(true);
      //disable  Like
      if (liked) {
        setLikeCount((prevCount) => prevCount - 1);
        setLiked(false);
      }
    }
  };
  const handleSetFile = () =>{}
  useEffect(()=>{
    const fetchUserInfo = async () => {
      
      try {
        // Fetch review counts from the API
        const response = await axios.get(url+`/api/userinfo/${review.userId}`);
        setuserInfo(response.data);
        
      } catch (error) {
        console.error("Error fetching review counts:", error);
      }
    };

    if(review.userId){
      fetchUserInfo();
    }
  },[])
  return (
    <div className="Pic-Name">
      <ProfileImage image={userInfo.imageSrc} handleSetFile={handleSetFile}/>
      <div className="name-rating">
        <h6 style={{ marginBottom: "0px !important" }}>
          <span>{userInfo.username}</span>
        </h6>
        <AllReviewStar rate={review.rating} />
      </div>
      <div
      className="Like-DisLike"
      >
        <Like
          handleLike={handleLikeButton}
          likeCount={likeCount}
          liked={liked}
        />
        <Dislike
          handleDislike={handleDislikeButton}
          dislikeCount={dislikeCount}
          disliked={disliked}
        />
      </div>
    </div>
  );
};
export default AllReviewProfile;
