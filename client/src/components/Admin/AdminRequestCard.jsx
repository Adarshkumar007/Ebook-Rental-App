import { useState } from "react";

const AdminRequestCard = ({ amt }) => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setRejected(false);
  };

  const handleReject = () => {
    setAccepted(false);
    setRejected(true);
  };

  return (
    <div className="AdminRequestCard">
      <div className="amount-requested amount-req-msg">
        <span style={{ color: "green" }} >
          <strong>₹ {amt} </strong>
        </span>
        is requested
      </div>
      {!accepted && !rejected && (
        <div className="action-button">
          <button type="button" className="btn btn-success action-button-button" onClick={handleAccept}>
            Accept
          </button>
          <button type="button" className="btn btn-danger action-button-button" onClick={handleReject}>
            Reject
          </button>
        </div>
      )}
      {accepted && <div className="action-button"><span className="badge bg-success">Accepted</span></div>}
      {rejected && <div className="action-button"><span className="badge bg-danger">Rejected</span></div>}
    </div>
  );
};

export default AdminRequestCard;
