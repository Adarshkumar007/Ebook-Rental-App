import MyReviewPicture from "./MyReviewPicture";
import AllReviewStar from "./AllReviewStar";
import Like from "./Like";
import Dislike from "./Dislike";
import axios from "axios";
import { useEffect, useState } from "react";
import ProfileImage from "../ProfileImage";
import {url} from '../../../url';
const AllReviewProfile = ({ review }) => {
  
  const [liked, setLiked] = useState(review.likes.includes(localStorage.getItem('id')));
  const [likeCount, setLikeCount] = useState(review.likes ? review.likes.length.toString() : "0");
  const [dislikeCount, setDislikeCount] = useState(review.dislikes ? review.dislikes.length.toString() : "0");
console.log("type",typeof(review.dislikes.length.toString()));
  const handleLikeButton = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    } else {
      setLikeCount((prevCount) => parseInt(prevCount) + 1);
      setLiked(true);
      //disable  Dislike
      if (disliked) {
        setDislikeCount((prevCount) => prevCount - 1);
        setDisliked(false);
      }
    }
    handlelikes();
  };

  //Dislike handling
  const [disliked, setDisliked] = useState(review.dislikes.includes(localStorage.getItem('id')));
  const [userInfo ,setuserInfo] = useState({});
  const handleDislikeButton = () => {
    if (disliked) {
      setDislikeCount((prevCount) => prevCount - 1);
      setDisliked(false);
    } else {
      setDislikeCount((prevCount) => parseInt(prevCount) + 1);
      setDisliked(true);
      //disable  Like
      if (liked) {
        setLikeCount((prevCount) => prevCount - 1);
        setLiked(false);
      }
    }
    handledislikes();
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
  },[review.userId])
  const handlelikes = async () =>{
          try {
            // Fetch review counts from the API
            console.log("review",likeCount,dislikeCount);
            const response = await axios.post(url + '/api/bookreview/likes', {
              id: review._id
            }, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            
        
            console.log("asdsa",response.data.message);
            
          } catch (error) {
            console.error("Error fetching review counts:", error);
          }
        }
    const handledislikes = async () =>{
      try {
        // Fetch review counts from the API
        console.log("review",likeCount,dislikeCount);
        const response = await axios.post(url + '/api/bookreview/dislikes', {
          id: review._id
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        
    
        console.log("asdsa",response.data.message);
        
      } catch (error) {
        console.error("Error fetching review counts:", error);
      }
          }
  
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
