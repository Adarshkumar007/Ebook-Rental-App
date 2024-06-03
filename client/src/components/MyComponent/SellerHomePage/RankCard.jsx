const RankCard = ({book}) => {
  return (
    <div className="RankCard SubContainer">
        <div className="RankNo My-Title-Style">
            #{book.rank}
        </div>
      <div className="RankCardImage SubContainer">
        <img src={book.thumbnail} alt="book" className="rankimage" />
      </div>
      <div className="RankCardInfo">
        <div className="Rank-Book-Name">{book.name}</div>
        <div className="BookStats">
          <div>Total Earning: ₹{book.earning}</div>
          <div>Total Subscribes: {book.subscriber}</div>
        </div>
      </div>
      
    </div>
  );
};
export default RankCard;
