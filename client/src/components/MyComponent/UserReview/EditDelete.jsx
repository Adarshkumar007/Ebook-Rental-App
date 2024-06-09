import { useDispatch } from "react-redux";
import { setActiveModal } from "../../../redux/actions/authActions";
import { CURRENT_REVIEW } from "../../../redux/actions/types";
import axios from "axios";
import { url } from "../../../url";

const EditDelete=({review})=>{
    const dispatch=useDispatch();

    const handleShowReviewEditModal=()=>{
        dispatch({
            type: CURRENT_REVIEW,
            currentReview:review._id
          })
        dispatch(setActiveModal("ReviewEdit","user"))
    }
    const handleReviewDelete=async ()=>{
        console.log("delete");
        try {
            const response = await axios.post(url + "/reviewdelete", {
              reviewID: review._id,
            }, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            window.location.reload();
          } catch (error) {
            console.log("error deleting review",error);
          }
    }
    return(
        <div  className="EditDelete">
            <div onClick={handleShowReviewEditModal} className="EditReviewButton">Edit</div>
            <div className="DeleteReviewButton" onClick={handleReviewDelete}>Delete</div>
        </div>
    )
}
export default EditDelete;