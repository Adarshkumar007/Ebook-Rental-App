import React from "react";
import { Form } from "react-bootstrap";

const MyInput = ({ type, placeholder, value, onChange,label }) => {
  return (
    <>
      <Form.Label style={{ fontFamily: '"DM Sans", sans-serif' ,fontSize: "15px",
          fontWeight: "600"}}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder} // Removed space between curly braces and placeholder
        value={value}
        onChange={onChange}
        style={{
          fontFamily: '"DM Sans", sans-serif',fontSize: "14px"
        }}
      />
    </>
  );
};

export default MyInput;