import React, { useState } from "react";
import SuccessButton from "./SuccessButton";
import { Container, Form } from "react-bootstrap";

const OtpInput = ({ type, placeholder, value, onChange }) => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    // Perform verification logic here (e.g., sending OTP)
    // Once verified, set isVerified to true
    setIsVerified(true);
  };

  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Form.Control
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={6}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "15px",
            marginRight: "5px",
            width: "250px",
          }}
        />
        {isVerified ? (
          <SuccessButton myval="Enter" type="submit" />
        ) : (
          <SuccessButton myval="Verify" type="button" onClick={handleVerify} />
        )}
      </div>
    </Container>
  );
};

export default OtpInput;
