import React, { useEffect, useState } from "react";
import AddVariationButton from "./AddVariationButton";
import SubscriptionPlanForm from "./SubscriptionPlanForm";

const SubscriptionVariation = ({ handlePlan }) => {
  const [planForms, setPlanForms] = useState([{ month: "", price: "" }]);

  const handleAddVariation = () => {
    setPlanForms((prevForms) => [...prevForms, { month: "", price: "" }]);
  };

  const updatePlan = (index, plan) => {
    const updatedForms = [...planForms];
    updatedForms[index] = plan;
    setPlanForms(updatedForms);
  };

  const handleDeletePlan = (indexToDelete) => {
    setPlanForms((prevForms) =>
      prevForms.filter((_, index) => index !== indexToDelete)
    );
  };

  useEffect(() => {
    handlePlan(planForms);
  }, [planForms]);

  return (
    <div className="SubscriptionVariation">
      {planForms.map((plan, index) => (
        <SubscriptionPlanForm
          key={index}
          index={index}
          plan={plan}
          updatePlan={updatePlan}
          onDelete={handleDeletePlan}
        />
      ))}
      <AddVariationButton addVariation={handleAddVariation} />
    </div>
  );
};

export default SubscriptionVariation;
