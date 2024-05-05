import { VscUnverified, VscVerified } from "react-icons/vsc";
const ApproveButton = ({ approved }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", padding: "0" }}>
      {approved ? (
        <div
          className="ApproveCommet"
        >
          <VscUnverified color="red" size={20} />
          <span>Approve</span>
        </div>
      ) : (
        <div
        className="ApprovedCommet"
        >
          <VscVerified color="green" size={20} />
          <span>Approved</span>
        </div>
      )}
    </div>
  );
};
export default ApproveButton;
