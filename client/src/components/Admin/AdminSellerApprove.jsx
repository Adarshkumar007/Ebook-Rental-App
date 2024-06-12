import ApproveSellerCard from "./ApproveSellerCard";
import { NewSeller } from "../DataCollection/NewSeller";

const AdminSellerApprove = () => {
  return (
    <div className="AdminSellerApprove">
      {NewSeller.map((newseller) => (
        <ApproveSellerCard key={newseller.userId} newseller={newseller} />
      ))}
    </div>
  );
};

export default AdminSellerApprove;
