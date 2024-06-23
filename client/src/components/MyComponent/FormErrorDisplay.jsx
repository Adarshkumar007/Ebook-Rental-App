import React from "react";

const FormErrorDisplay = ({ message, type }) => {
  const alertClass = type === "error" ? "alert-danger" : "alert-success";

  return (
    <div className={`FormErrorDisplay alert ${alertClass}`} role="alert">
      {message}
    </div>
  );
};

export default FormErrorDisplay;
