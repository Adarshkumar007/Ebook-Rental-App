const OrderDetails = ({myorder}) => {
  return (
    <div className="Order-Details-Container">
      <h4 style={{color:" #000d42",fontWeight:"bold"}}>{myorder.name}</h4>
      <div className="Order-Details">
        <div className="Order-Detail ">
          <div><span className="order-detais-heading">Order Id :</span><span className="order-detais-heading-content">{myorder.orderId}</span></div>
          <div><span className="order-detais-heading">Amount  :₹</span><span className="order-detais-heading-content">{myorder.amount}</span> </div>
        </div>
        <div className="Order-Detail">
          <div><span className="order-detais-heading">Order Date :</span><span className="order-detais-heading-content">{myorder.orderDate}</span></div>
          <div><span className="order-detais-heading">Expire Date :</span><span className="order-detais-heading-content">{myorder.ExpireDate}</span></div>
        </div>
        <div className="Go-to-Library">
          <button
            class="btn btn-primary rounded-pill px-3 Order-Library-Button"
            type="button"
          >
            Go to Library
          </button>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
