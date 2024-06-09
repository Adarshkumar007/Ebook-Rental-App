import check from "../../images/check.png";
import { IoClose } from "react-icons/io5";
import './AddTocartAlert.css'
const MyReviewAlert = ({closeModel}) => {
  return (
    <div className="AddTocartAlert">
      <div className="AddTocartAlertIcon">
        <img src={check} alt="" className="check" />
      </div>
      <div className="AddTocartAlertContent">
        <strong>Your Review Submitted Successfully</strong>
      </div>
      <div style={{ cursor: "pointer" }}>
        {" "}
        <IoClose size={20} onClick={closeModel} />
      </div>
    </div>
  );
};

export default MyReviewAlert;
