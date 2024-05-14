import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
const MyLikeDislike = ({review}) => {
  return (
    <div className="MyLikeDislike">
      <div className="MyReviewImpression">
        <BiSolidLike />
        <div>{review.likes ? review.likes.length.toString() : "0"}</div>
      </div>
      <div className="MyReviewImpression">
        <BiSolidDislike />
        <div>{review.dislikes ? review.dislikes.length.toString() : "0"}</div>
      </div>
    </div>
  );
};
export default MyLikeDislike;
