import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
const MyLikeDislike = () => {
  return (
    <div className="MyLikeDislike">
      <div className="MyReviewImpression">
        <BiSolidLike />
        <div>50</div>
      </div>
      <div className="MyReviewImpression">
        <BiSolidDislike />
        <div>50</div>
      </div>
    </div>
  );
};
export default MyLikeDislike;
