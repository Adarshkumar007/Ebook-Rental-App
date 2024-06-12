import React, { useState, useEffect } from "react";
import MyInput from "../MyInput";
import { MdDeleteForever } from "react-icons/md";

const SubscriptionPlanForm = ({ plan=[],index, updatePlan }) => {
  const [month, setMonth] = useState(plan.month || "");
  const [price, setPrice] = useState(plan.price ||"");

  useEffect(() => {
    // Update the plan in the parent component when month or price changes
    updatePlan(index, { month, price });
  }, [month, price]);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

 
  return (
    <div className="SubscriptionPlanForm">
      <MyInput
        type="number"
        label=""
        placeholder="Enter Number of Month"
        value={month}
        onChange={handleMonthChange}
      />
      <MyInput
        type="number"
        label=""
        step="0.01"
        placeholder="Enter Price"
        value={price}
        onChange={handlePriceChange}
      />
      <MdDeleteForever size={50} style={{color:"red",cursor:"pointer"}}/>
    </div>
  );
};

export default SubscriptionPlanForm;
