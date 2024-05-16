
import MyInput from "../MyInput";
const SubscriptionPlanForm = () => {
 
  return (
    <div className="SubscriptionPlanForm">
      <MyInput
        type="text"
        label=""
        placeholder="Enter Month"
        value={""}
        onChange={()=>{}}
      />
       <MyInput
        type="number"
        label=""
        step="0.01"
        placeholder="Enter Price"
        value={""}
        onChange={()=>{}}
      />
    </div>
  );
};
export default SubscriptionPlanForm;
