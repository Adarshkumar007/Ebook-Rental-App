import MyReviewPicture from "./MyReviewPicture";
import AllReviewStar from "./AllReviewStar";
 const AllReviewProfile=()=>{
    return(
        <div className="Pic-Name">
        <MyReviewPicture Profiepic={"Profie-Pic"}/>
        <div className="name-rating">
          <h6 style={{marginBottom:"0px !important"}}>
            <span >KN Ganesh</span>
          </h6>
          <AllReviewStar rate={5} />
        </div>
      </div>
    )
 }
 export default AllReviewProfile;