import AddVariationButton from "./AddVariationButton";
import SubscriptionPlanForm from "./SubscriptionPlanForm";
import { useState } from "react";

const SubscriptionVariation = () => {
  const [planForms, setPlanForms] = useState([1]);

  const handleAddVariation = () => {
    setPlanForms((prevForms) => [...prevForms, prevForms.length + 1]);
  };

  return (
    <div className="SubscriptionVariation">
      {planForms.map((index) => (
        <SubscriptionPlanForm key={index} />
      ))}
      <AddVariationButton addVariation={handleAddVariation} />
    </div>
  );
};

export default SubscriptionVariation;
