import subscription from '../../images/subscription.png'
import { IoClose } from "react-icons/io5";
import './AddTocartAlert.css'
const SubscribeRequiredAlert = ({closeModel}) => {
  return (
    <div className="AddTocartAlert">
      <div className="AddTocartAlertIcon">
        <img src={subscription} alt="" className="check" />
      </div>
      <div className="AddTocartAlertContent"><strong>Subscription is required To Give Review</strong></div>
      <div style={{cursor:"pointer"}}> <IoClose size={20} onClick={closeModel}/></div>
      
    </div>
  );
};

export default SubscribeRequiredAlert;
