import check from "../../images/check.png";
import { IoClose } from "react-icons/io5";
import './AddTocartAlert.css'
const AddToCartAlert = ({closeModel}) => {
  return (
    <div className="AddTocartAlert">
      <div className="AddTocartAlertIcon">
        <img src={check} alt="" className="check" />
      </div>
      <div className="AddTocartAlertContent"><strong>Book Added to Cart</strong></div>
      <div style={{cursor:"pointer"}}> <IoClose size={20} onClick={closeModel}/></div>
      
    </div>
  );
};

export default AddToCartAlert;
