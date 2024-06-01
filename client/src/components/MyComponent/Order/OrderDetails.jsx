const OrderDetails = ({order}) => {
  return (
    <div className="Order-Details-Container">
      <h4 style={{color:" #000d42",fontWeight:"bold"}} className="Order-Book-Name">{order.name}</h4>
      <div className="Order-Details">
        <div className="Order-Detail ">
          <div><span className="order-detais-heading">Order Id :</span><span className="order-detais-heading-content">{order.receipt}</span></div>
          <div><span className="order-detais-heading">Amount  :₹</span><span className="order-detais-heading-content">{(order.amount/100)}</span> </div>
        </div>
        <div className="Order-Detail">
          <div><span className="order-detais-heading">Status :</span><span className="order-detais-heading-content">{order.status}</span></div>
          <div><span className="order-detais-heading">Subscription Plan:</span><span className="order-detais-heading-content">{order.plan} month</span></div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetails;
