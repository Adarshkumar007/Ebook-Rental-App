import MyLikeDislike from "../UserReview/MyLikeDislike";
import ProfileImage from "../ProfileImage";
import AllReviewStar from "../ReviewComponents/AllReviewStar";

const UserReviewProfile=()=>{
    return(
        <div className="Pic-Name">
        <ProfileImage image={""} />
        <div className="name-rating">
          <h6 style={{ marginBottom: "0px !important" }}>
            <span>KN Ganesh</span>
          </h6>
          <AllReviewStar rate={5} />
        </div>
        <div
        className="Like-DisLike"
        >
         <MyLikeDislike/>
        </div>
      </div>
    )
}
export default UserReviewProfile;