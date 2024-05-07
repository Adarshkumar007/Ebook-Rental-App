import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
const MyLikeDislike = ({review}) => {
  return (
    <div className="MyLikeDislike">
      <div className="MyReviewImpression">
        <BiSolidLike />
        <div>{review.likes}</div>
      </div>
      <div className="MyReviewImpression">
        <BiSolidDislike />
        <div>{review.dislikes}</div>
      </div>
    </div>
  );
};
export default MyLikeDislike;
