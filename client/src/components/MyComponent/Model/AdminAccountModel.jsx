import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AdminAccountForm from "../../Admin/AdminAccountForm";
import AdminLoginAlert from "../../Admin/AdminLoginAlert"; // Import AdminLoginAlert for displaying alerts

const AdminAccountModel = (props) => {
  const [showAlert, setShowAlert] = useState(false); // State for showing alerts
  const [alertType, setAlertType] = useState("success"); // State for alert type (success or error)
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message

  // State for form inputs and errors
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Function to handle password update
  const handlePasswordUpdate = () => {
    const formValid = validateForm(); // Validate the form before proceeding

    if (formValid) {
      setAlertType("success");
      setAlertMessage("Password updated successfully.");

      // Clear form inputs and errors
      setPassword("");
      setConfirmPassword("");
      setPasswordError("");
      setConfirmPasswordError("");

      // Perform actual password update logic here
      // Example: updatePassword(password);
    } else {
      setAlertType("error");
      setAlertMessage("Failed to update password. Please check errors.");
    }

    setShowAlert(true); // Show the alert modal
    setTimeout(()=> setShowAlert(false),1000);
  };

  // Function to validate the form inputs
  const validateForm = () => {
    let isValid = true;

    // Password validation
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  // Password validation function
  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  // Function to close the alert modal
  const handleAlertClose = () => setShowAlert(false);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static" // Disable clicking outside to close
      keyboard={false} // Disable ESC key to close
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          Account Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AdminAccountForm
          password={password}
          confirmPassword={confirmPassword}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handlePasswordUpdate}>Change Password</Button>
      </Modal.Footer>
      {/* Display AdminLoginAlert component for showing alerts */}
      <AdminLoginAlert
        show={showAlert}
        onHide={handleAlertClose}
        alerttype={alertType}
        message={alertMessage}
      />
    </Modal>
  );
};

export default AdminAccountModel;
