import check from "../../images/check.png";
import { IoClose } from "react-icons/io5";
import './AddTocartAlert.css'
const SubscribedAlert = ({closeModel,msg}) => {
  return (
    <div className="AddTocartAlert">
      <div className="AddTocartAlertIcon">
        <img src={check} alt="" className="check" />
      </div>
      <div className="AddTocartAlertContent"><strong>{msg}</strong></div>
      <div style={{cursor:"pointer"}}> <IoClose size={20} onClick={closeModel}/></div>
      
    </div>
  );
};

export default SubscribedAlert;
