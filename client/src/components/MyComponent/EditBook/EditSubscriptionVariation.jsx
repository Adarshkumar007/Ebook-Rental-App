import AddVariationButton from "../SubscriptionVariationContainer/AddVariationButton";
import EditSubscriptionPlanForm from "../SubscriptionVariationContainer/EditSubscriptionPlanForm";
import { useEffect, useState } from "react";

const EditSubscriptionVariation = ({ plan = [], handlePlan }) => {
  const [plans, setPlans] = useState(plan);

  const handleAddVariation = () => {
    setPlans((prevPlans) => [...prevPlans, { month: "", price: "" }]);
  };

  const updatePlan = (index, updatedPlan) => {
    const updatedPlans = plans.map((p, i) => (i === index ? updatedPlan : p));
    setPlans(updatedPlans);
  };

  const handleDeletePlan = (indexToDelete) => {
    setPlans((prevPlans) => prevPlans.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    handlePlan(plans);
  }, [plans, handlePlan]);

  return (
    <div className="SubscriptionVariation">
      {plans.map((plan, index) => (
        <EditSubscriptionPlanForm
          key={index}
          plan={plan}
          index={index}
          updatePlan={updatePlan}
          onDelete={handleDeletePlan}
        />
      ))}
      <AddVariationButton addVariation={handleAddVariation} />
    </div>
  );
};

export default EditSubscriptionVariation;
