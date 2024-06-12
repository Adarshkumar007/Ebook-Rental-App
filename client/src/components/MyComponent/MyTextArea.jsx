import React from "react";
import { Form } from "react-bootstrap";

const MyTextArea = ({ placeholder, value,name="", onChange, label }) => {
  return (
    <>
      <Form.Label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "15px", fontWeight: "600" }}>
        {label}
      </Form.Label>
      <Form.Control
        as="textarea"
        rows={4} // You can adjust the number of rows as needed
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "15px" }}
      />
    </>
  );
};

export default MyTextArea;
