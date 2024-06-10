import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AdminLoginForm from "../../Admin/AdminLoginForm";

const LoginModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static" // Disable clicking outside to close
      keyboard={false} // Disable ESC key to close
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Admin Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AdminLoginForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
