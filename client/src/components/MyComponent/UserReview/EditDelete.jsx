import { useDispatch } from "react-redux";
import { setActiveModal } from "../../../redux/actions/authActions";

const EditDelete=()=>{
    const dispatch=useDispatch();

    const handleShowReviewEditModal=()=>{
        dispatch(setActiveModal("ReviewEdit","user"))
    }
    return(
        <div  className="EditDelete">
            <div onClick={handleShowReviewEditModal} className="EditReviewButton">Edit</div>
            <div className="DeleteReviewButton">Delete</div>
        </div>
    )
}
export default EditDelete;