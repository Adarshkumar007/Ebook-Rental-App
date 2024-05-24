import React, { useState, useEffect } from "react";
import MyInput from "../MyInput";

const SubscriptionPlanForm = ({ index, updatePlan }) => {
  const [month, setMonth] = useState("");
  const [price, setPrice] = useState("");

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
    </div>
  );
};

export default SubscriptionPlanForm;
