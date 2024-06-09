import check from "../../images/check.png";
import { IoClose } from "react-icons/io5";
import './AddTocartAlert.css'
const SubscribedAlert = ({closeModel}) => {
  return (
    <div className="AddTocartAlert">
      <div className="AddTocartAlertIcon">
        <img src={check} alt="" className="check" />
      </div>
      <div className="AddTocartAlertContent"><strong>You Successfully Subscribed To The Book</strong></div>
      <div style={{cursor:"pointer"}}> <IoClose size={20} onClick={closeModel}/></div>
      
    </div>
  );
};

export default SubscribedAlert;
