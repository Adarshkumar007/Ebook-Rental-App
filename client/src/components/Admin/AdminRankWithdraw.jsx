import AdminRankContainer from "./AdminRankContainer";
import AdminWithdrawConatiner from "./AdminWithdrawContainer";

const AdminRankWithdraw = ({sellerId}) => {
  return (
    <div className="Admin-Rank-Withdraw">
      <AdminRankContainer sellerId={sellerId}/>
      <AdminWithdrawConatiner sellerId={sellerId}/>
    </div>
  );
};

export default AdminRankWithdraw;
