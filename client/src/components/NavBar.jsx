import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import {
  clearError,
  setActiveModal,
  setUserTypeAction,
} from "../redux/actions/authActions";
import { logout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import logo from "./images/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CgProfile } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserXmark } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { setOTPError } from "../redux/actions/sendOTPAction";

import MyButton from "./MyComponent/MyButton";

const NavbarComponent = () => {
  const activeModal = useSelector((state) => state.auth.activeModal);
  const activeModalSeller = useSelector(
    (state) => state.sellerauth.activeModal
  );
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );
  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const authUsername = useSelector((state) => state.auth.username);
  console.log(authUsername);
  const sellerUsername = useSelector((state) => state.sellerauth.username);
  const username = userType === "user" ? authUsername : sellerUsername;

  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(isAuthenticated);
  const handleShowModal = (modalName) => {
    dispatch(setActiveModal(modalName, userType));
  };
  const handlelogout = () => {
    dispatch(logout(userType));
  };
  const handleCloseModal = () => {
    dispatch(setActiveModal(null, userType));
    dispatch(clearError());
    dispatch(setOTPError());
  };
  const handleSellerAC = () => {
    dispatch(setUserTypeAction("seller"));
    navigate("/seller");
  };
  const handleProfile = () => {
    dispatch(setUserTypeAction("seller"));
    navigate("/profile");
  };
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav
        className="shadow-lg navbar navbar-expand-lg bg-body-tertiary custom-rounded"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" className="navbar-brand mb-4 main-logo" />
            <span className="title">RentReader</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="  collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <form className="d-flex mb-2 search-bar" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <MyButton myval="Search" />
            </form>

            <ul className="navbar-nav me-5">
              <li className="nav-item dropdown ">
                <a
                  className={`nav-link dropdown-toggle d-flex lg-justify-content-center ${
                    isDropdownOpen ? "dropdown-toggle-wrapper" : ""
                  }`}
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  onClick={handleProfileClick}
                >
                  <CgProfile className="account-pic" />
                  {((userType === "user" && !isAuthenticated) ||
                    (userType === "seller" && !isSellerAuthenticated)) && (
                    <span
                      className="navi-items"
                      onClick={() => handleShowModal("login")}
                    >
                      Login
                    </span>
                  )}
                  {((userType === "user" && isAuthenticated) ||
                    (userType === "seller" && isSellerAuthenticated)) && (
                    <span className="navi-items">{username}</span>
                  )}
                </a>

                <ul
                  className={`dropdown-menu ${
                    isDropdownOpen ? "dropdown-menu-end show" : ""
                  }`}
                >
                  {((userType==="user"&&!isAuthenticated)||(userType==="seller"&&!isSellerAuthenticated))  && (
                    <>
                      <li>
                        <a
                          className="dropdown-item pointer"
                          onClick={() => handleShowModal("signup")}
                        >
                          <FaUserPlus className="account-pic" id="list-pics" />
                          <span className="account-options">SignUp</span>
                        </a>
                      </li>
                    </>
                  )}
                  {((userType === "user" && isAuthenticated) ||
                    (userType === "seller" && isSellerAuthenticated)) && (
                    <>
                      <li>
                        <a className="dropdown-item pointer" onClick={handleProfile}>
                          <FaUserCircle
                            className="account-pic"
                            id="list-pics"
                          />
                          <span className="account-options">My Profie</span>
                        </a>
                      </li>
                      {userType === "user" && (
                        <>
                          <li>
                            <a className="dropdown-item pointer">
                              <CiDeliveryTruck
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">Orders</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item pointer">
                              <IoLibrary
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">Library</span>
                            </a>
                          </li>
                        </>
                      )}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item pointer"
                          onClick={handlelogout}
                        >
                          <FaUserXmark className="account-pic" id="list-pics" />
                          <span className="account-options">Logout</span>
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </li>
              {userType==="user" && (
                <li className="nav-item">
                  <a
                    className="nav-link d-flex lg-justify-content-center"
                    href="#"
                  >
                    <BsCart4 className="account-pic" />
                    <span className="navi-items">Cart</span>
                  </a>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex lg-justify-content-center"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                >
                  <CiMenuKebab className="account-pic" />
                  <span className="navi-items">More</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {userType==="user" && 
                  <li>
                    <a
                      className="dropdown-item pointer"
                      onClick={handleSellerAC}
                    >
                      <BsShop className="account-pic" id="list-pics" />
                      <span className="account-options">Be a Seller</span>
                    </a>
                  </li>
}
                  <li>
                    <a className="dropdown-item pointer">
                      <BiSupport className="account-pic" id="list-pics" />
                      <span className="account-options">24x7 Help</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item pointer">
                      <IoIosNotificationsOutline
                        className="account-pic"
                        id="list-pics"
                      />
                      <span className="account-options">Notifications</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container>
        <Row>
          <Col>
            {((activeModal === "login" && userType === "user") ||
              (activeModalSeller === "login" && userType === "seller")) && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Login userType={userType} />
                </Modal.Body>
                <Modal.Footer>
                  <MyButton myval="Close" onClick={handleCloseModal} />
                  {/* <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button> */}
                </Modal.Footer>
              </Modal>
            )}
            {((activeModal === "signup" && userType === "user") ||
              (activeModalSeller === "signup" && userType === "seller")) && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Signup userType={userType} />
                </Modal.Body>
                <Modal.Footer>
                  <MyButton myval="Close" onClick={handleCloseModal} />
                  {/* <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button> */}
                </Modal.Footer>
              </Modal>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NavbarComponent;
