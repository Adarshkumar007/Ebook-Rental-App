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
import { useSelector } from "react-redux";
import axios from 'axios';
import { url } from "../../url";

const AdminHeader = () => {

  const [modalShow, setModalShow] = useState(false);
  const [online, setOnline] = useState(true); // Initialize online state
  const [showAlert, setShowAlert] = useState(false); // Modal for user message
  const [showAccount, setShowAccount] = useState(false);
  const [isAuthenticated,setIsauthenticated]=useState(localStorage.getItem('adminToken')?true:false);
  console.log("auth",localStorage.getItem("admintoken"),isAuthenticated)
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: ''
  });
  useEffect(() => {
    // Check if user is online on component mount
    if (!online) {
      setModalShow(true); // Show modal if user is not online
    }
  }, [online]); // Depend on `online` to ensure effect runs if `online` changes

  const handleLogout = () => {
    setOnline(false); // Set online to false
    localStorage.removeItem("adminToken");
    setIsauthenticated(false);
    setModalShow(true); // Show the modal

  };
  const onchange=(credentials)=>
  {

    setAdminCredentials(credentials);

  }
  const handleModalClose = () => {
    setModalShow(false); // Close the modal
  };
  console.log("admin",adminCredentials)
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if(localStorage.getItem("adminusername")===adminCredentials.username &&localStorage.getItem("adminpassword")===adminCredentials.password)
      // const response = await axios.post(url+'/api/admin/login', adminCredentials);
      // const { token } = response.data;
      localStorage.setItem('adminToken', "sjhsbbsd");
      // Store the token in localStorage or state
      setIsauthenticated(true);
      setOnline(true); // Set online to true when "Save" button is clicked
      setModalShow(false); // Close the modal after saving
      // Redirect or perform any other action
    } catch (err) {
      setShowAlert('Invalid username or password');
    }
    
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
                  to="ApproveSeller"
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
        className="admin-modal" // Add a unique class
        key={modalShow ? "modal-open" : "modal-closed"}
        show={!isAuthenticated}
        onHide={handleModalClose}
        onChange={onchange}
        onSave={handleSave} // Pass onSave handler to LoginModal
      />
      <AdminLoginAlert
        className="admin-modal" // Add a unique class
        show={showAlert}
        onHide={handleAlertClose}
        alerttype="error"
        message="Invalid Credentials"
      />
      <AdminAccountModel
        className="admin-modal" // Add a unique class
        key={showAccount ? "modal-open" : "modal-closed"}
        show={showAccount}
        onHide={handleAccountClose}
      />
    </>
  );
};

export default AdminHeader;
