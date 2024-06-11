import myimage from "../images/image1.jpg";
const AdminRankCard = () => {
  return (
    <div className="AdminRankCard">
      <div className="RankNo My-Title-Style" style={{ fontWeight: "bold" }}>
        #1
      </div>
      <div className="admin-book-rank-image">
        <img src={myimage} alt="" className="book-rank-image" />
      </div>
      <div className="Admin-Book-Rank-Details-Container">
        <div className="Admin-Book-Rank-Details">
          <div className="rank-book-title">Book1</div>
        </div>
        <div className="Admin-Book-Rank-Details">
          <div className="dmin-Book-earning">
            <div>Lifetime Earnings:</div>
            <div>₹20000</div>
          </div>
          <div className="dmin-Book-earning">
            <div>Total Subscribes:</div>
            <div>200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRankCard;
