import MyLikeDislike from "../UserReview/MyLikeDislike";
import ProfileImage from "../ProfileImage";
import AllReviewStar from "../ReviewComponents/AllReviewStar";
import axios from "axios";
import { useEffect, useState } from "react";
// import ProfileImage from "../ProfileImage";
import {url} from '../../../url';
const UserReviewProfile=({review})=>{
  const [userInfo ,setuserInfo] = useState({});

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

    if(review){
      fetchUserInfo();
    }
  },[])
    return(
        <div className="Pic-Name">
        <ProfileImage image={userInfo.imageSrc} />
        <div className="name-rating">
          <h6 style={{ marginBottom: "0px !important" }}>
            <span>{userInfo.username}</span>
          </h6>
          <AllReviewStar rate={review.rating} />
        </div>
        <div
        className="Like-DisLike"
        >
         <MyLikeDislike review={review}/>
        </div>
      </div>
    )
}
export default UserReviewProfile;