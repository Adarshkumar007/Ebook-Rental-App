import OrderDetails from "./OrderDetails";

const SingleOrderDetails = ({ myorder }) => {
  return (
    <div className="Order-Contaier">
      <div className="Ordered-Book-container">
        <div className="Ordered-Book">
          <img src={myorder.image} alt="book" className="Ordered-Book-image" />
        </div>
      </div>

      <div className="OrderDetails-Main-Container">
        <OrderDetails myorder={myorder} />
      </div>
    </div>
  );
};
export default SingleOrderDetails;
