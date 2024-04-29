import MyReviewPicture from "./MyReviewPicture";
import AllReviewStar from "./AllReviewStar";
import Like from "./Like";
import Dislike from "./Dislike";

import { useState } from "react";

const AllReviewProfile = () => {
  //Like handlig
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(55);
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
  const [dislikeCount, setDislikeCount] = useState(20);

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

  return (
    <div className="Pic-Name">
      <MyReviewPicture Profiepic={"Profie-Pic"} />
      <div className="name-rating">
        <h6 style={{ marginBottom: "0px !important" }}>
          <span>KN Ganesh</span>
        </h6>
        <AllReviewStar rate={5} />
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
