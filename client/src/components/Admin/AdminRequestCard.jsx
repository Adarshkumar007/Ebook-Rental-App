import axios from "axios";
import { useState } from "react";
import { url } from "../../url";

const AdminRequestCard = ({ amt,tstatus ,id}) => {
  const [status, setStatus] = useState(tstatus);
  const handleAccept = async () => {
    setStatus("accepted");
    console.log("status payment",tstatus);
    try {
      const response = await axios.post(url+"/api/transfer", {
        requestId:id
      });
      if (response.data.success) {
        console.log("Transfer successful", response.data.transfer);

      } else {
        console.error("Transfer failed", response.data.error);
      }
    } catch (error) {
      console.error("Error in transfer", error);
    }

  };

  const handleReject = async () => {
    setStatus("rejected");
    console.log("status payment",tstatus);
    try {
      const response = await axios.post(url+"/api/transferrejected", {
        requestId:id
      });
      if (response.data.success) {
        console.log("Transfer successful", response.data.transfer);

      } else {
        console.error("Transfer failed", response.data.error);
      }
    } catch (error) {
      console.error("Error in transfer", error);
    }
  };

  return (
    <div className="AdminRequestCard">
      <div className="amount-requested amount-req-msg">
        <span style={{ color: "green" }} >
          <strong>₹ {amt/100} </strong>
        </span>
        is requested
      </div>
      {status==="pending" && (
        <div className="action-button">
          <button type="button" className="btn btn-success action-button-button" onClick={handleAccept}>
            Accept
          </button>
          <button type="button" className="btn btn-danger action-button-button" onClick={handleReject}>
            Reject
          </button>
        </div>
      )}
      { status==="accepted" && <div className="action-button"><span className="badge bg-success">Accepted</span></div>}
      { status==="rejected" && <div className="action-button"><span className="badge bg-danger">Rejected</span></div>}
    </div>
  );
};

export default AdminRequestCard;
