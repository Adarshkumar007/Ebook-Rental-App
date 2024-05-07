import UserReviewProfile from "./UserReviewProfile";
import AllReviewComment from "../ReviewComponents/AllReviewComment";
import ApproveButton from "./ApproveButton";
var comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam natus excepturi dolor reiciendis, quasi voluptas ullam laudantium itaque maiores deserunt minus explicabo! Pariatur enim commodi praesentium aut esse facere?";
const ReviewModalIndividualReview = ({approved}) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
        }}
      >
        <UserReviewProfile/>
        <AllReviewComment comment={comment} />
        <ApproveButton approved={approved}/>

      </div>
    );
  };
  
  export default ReviewModalIndividualReview;
  