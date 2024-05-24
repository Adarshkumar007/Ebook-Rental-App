import AddVariationButton from "./AddVariationButton";
import SubscriptionPlanForm from "./SubscriptionPlanForm";
import { useEffect, useState } from "react";

const SubscriptionVariation = ({handlePlan}) => {
  const [planForms, setPlanForms] = useState([0]);
  const [plans, setPlans] = useState([]);

  const handleAddVariation = () => {
    setPlanForms((prevForms) => [...prevForms, prevForms.length]);
  };

  const updatePlan = (index, plan) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = plan;
    setPlans(updatedPlans);
  };
  useEffect(()=>{
    handlePlan(plans);
  },[plans]);
  return (
    <div className="SubscriptionVariation">
      {planForms.map((index) => (
        <SubscriptionPlanForm key={index} index={index} updatePlan={updatePlan} />
      ))}
      <AddVariationButton addVariation={handleAddVariation} />
    </div>
  );
};

export default SubscriptionVariation;
