const Plan = ({plan}) => {
    console.log(plan);
  return (
    <div className="Plan">
      <div className="month">
        <div>{plan.month}</div>
        <div>month</div>
      </div>
      <div className="price">
        {" "}
        <div>₹</div>
        <div>{plan.price}</div>
      </div>
      <button type="button" className="btn btn-danger Subscribe-Button">
        Subscribe
      </button>
    </div>
  );
};
export default Plan;
