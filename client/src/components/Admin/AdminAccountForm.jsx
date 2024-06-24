import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoEyeSharp } from "react-icons/io5";

const AdminAccountForm = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
  passwordError,
  confirmPasswordError,
  username,
  setusername
}) => {
  // Handle password change without validation on change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  const handleUsernameChange = (e) => {
    const newusername = e.target.value;
    setusername(newusername);
  };
  // Handle confirm password change without validation on change
  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "70%",
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
              />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">
          <IoEyeSharp />
        </InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Password"
          aria-label="Password"
          aria-describedby="basic-addon2"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={passwordError !== ""}
        />
      </InputGroup>
      {passwordError && <div style={{display:"flex",padding:"10px 24px",color:"red",textAlign:"justify",fontSize:"12px"}}>{passwordError}</div>}
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          <IoEyeSharp />
        </InputGroup.Text>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
          aria-describedby="basic-addon3"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          isInvalid={confirmPasswordError !== ""}
        />
      </InputGroup>
      {confirmPasswordError && <div style={{display:"flex",padding:"10px 24px",color:"red",fontSize:"12px"}}>{confirmPasswordError}</div>}
    </div>
  );
};

export default AdminAccountForm;
