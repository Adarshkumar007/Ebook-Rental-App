import AddVariationButton from "../SubscriptionVariationContainer/AddVariationButton";
import SubscriptionPlanForm from "../SubscriptionVariationContainer/SubscriptionPlanForm";
import { useEffect, useState } from "react";

const EditSubscriptionVariation = ({ plan = [], handlePlan }) => {
  const [planForms, setPlanForms] = useState([...Array(plan.length).keys()]);
  const [plans, setPlans] = useState(plan);

  const handleAddVariation = () => {
    setPlanForms((prevForms) => [...prevForms, prevForms.length]);
    setPlans((prevPlans) => [...prevPlans, {}]); // Add an empty object for the new plan
  };

  const updatePlan = (index, updatedPlan) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = updatedPlan;
    setPlans(updatedPlans);
  };

  useEffect(() => {
    handlePlan(plans);
  }, [plans, handlePlan]);

  return (
    <div className="SubscriptionVariation">
      {planForms.map((index) => (
        <SubscriptionPlanForm key={index} plan={plans[index]} index={index} updatePlan={updatePlan} />
      ))}
      <AddVariationButton addVariation={handleAddVariation} />
    </div>
  );
};

export default EditSubscriptionVariation;
