import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./AdminHeader.css";
import logo from "../images/logo.png";
import LoginModal from "../MyComponent/Model/LoginModal";
import AdminLoginAlert from "./AdminLoginAlert";
import AdminAccountModel from "../MyComponent/Model/AdminAccountModel";

const AdminHeader = () => {
  const [modalShow, setModalShow] = useState(false);
  const [online, setOnline] = useState(true); // Initialize online state
  const [showAlert, setShowAlert] = useState(false); // Modal for user message
  const [showAccount, setShowAccount] = useState(false);

  useEffect(() => {
    // Check if user is online on component mount
    if (!online) {
      setModalShow(true); // Show modal if user is not online
    }
  }, [online]); // Depend on `online` to ensure effect runs if `online` changes

  const handleLogout = () => {
    setOnline(false); // Set online to false
    setModalShow(true); // Show the modal
  };

  const handleModalClose = () => {
    setModalShow(false); // Close the modal
  };

  const handleSave = () => {
    setOnline(true); // Set online to true when "Save" button is clicked
    setModalShow(false); // Close the modal after saving
    setShowAlert(true); // Show alert after saving
    setTimeout(()=>setShowAlert(false),1000);
  };

  const handleAlertClose = () => setShowAlert(false); // Close alert

  const handleAccount = () => {
    setShowAccount(true);
  };

  const handleAccountClose = () => setShowAccount(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary admin-header">
        <Container>
          <Navbar.Brand as={Link} to="/admin">
            <div className="admin-logo">
              <img src={logo} alt="logo" className="admin-logo-image" />
              <div className="admin-title">RentReader</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto admin-nav-navbar">
              <Nav.Link as={Link} to="/admin" className="admin-dropdown-item">
                Home
              </Nav.Link>
              <NavDropdown
                title="Dashboard"
                id="basic-nav-dropdown admin-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="#"
                  className="admin-dropdown-item"
                  onClick={handleAccount}
                >
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/seller-approval"
                  className="admin-dropdown-item"
                >
                  Seller Approval
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/admin/help"
                  className="admin-dropdown-item"
                >
                  Help
                </NavDropdown.Item>
                <NavDropdown.Divider className="admin-dropdown-divider" />
                <NavDropdown.Item
                  className="admin-dropdown-item"
                  onClick={handleLogout} // Handle logout click
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginModal
        key={modalShow ? "modal-open" : "modal-closed"}
        show={modalShow}
        onHide={handleModalClose}
        onSave={handleSave} // Pass onSave handler to LoginModal
      />
      <AdminLoginAlert
        show={showAlert}
        onHide={handleAlertClose}
        alerttype="error"
        message="Invalid Credentials"
      />
      <AdminAccountModel
        key={showAccount ? "modal-open" : "modal-closed"}
        show={showAccount}
        onHide={handleAccountClose}
      />
    </>
  );
};

export default AdminHeader;
