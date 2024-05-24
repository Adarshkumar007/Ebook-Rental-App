import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import {
  clearError,
  setActiveModal,
  setUserTypeAction,
} from "../redux/actions/authActions";
import { logout } from "../redux/actions/authActions";
import { useNavigate, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import logo from "./images/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CgProfile } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserXmark } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { LuTruck } from "react-icons/lu";
import { BsShop } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaBookMedical } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { MdOutlineReviews } from "react-icons/md";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { setOTPError } from "../redux/actions/sendOTPAction";

import MyButton from "./MyComponent/MyButton";
import ReviewModalContent from "./MyComponent/SellerBookReview/ReviewModalContent";
import UserSubscriptionPlan from "./MyComponent/UserSubscription/UserSubscriptionPlan";
import { CURRENT_BOOKID } from "../redux/actions/types";
import ProfieModel from "./MyComponent/Model/ProfileModel";

const NavbarComponent = () => {
  const activeModal = useSelector((state) => state.auth.activeModal);
  const activeModalSeller = useSelector(
    (state) => state.sellerauth.activeModal
  );
  console.log("heiii", activeModal, activeModalSeller);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );
  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const authUsername = useSelector((state) => state.auth.username);
  console.log("hey", userType);
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
    dispatch({
      type: CURRENT_BOOKID,
      currentBookID: null,
    });  };
  const handleSellerAC = () => {
    dispatch(setUserTypeAction("seller"));
    navigate("/seller");
  };
  const handleProfile = () => {
    dispatch(setActiveModal("profile", userType));
  };
  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLibrary=()=>{
    navigate("/library");
  }
  const handlePublish = () => {
    navigate("/publish");
  };
  const handleOrders = () => {
    navigate("/orders");
  };
  const handleReviews = () => {
    navigate("/reviews");
  };
  const handleCollection = () => {
    navigate("/collection");
  };
  const handleCart = () => {
    navigate("cart");
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
                  {((userType === "user" && !isAuthenticated) ||
                    (userType === "seller" && !isSellerAuthenticated)) && (
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
                        <a
                          className="dropdown-item pointer"
                          onClick={handleProfile}
                        >
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
                            <a
                              className="dropdown-item pointer"
                              onClick={handleOrders}
                            >
                              <LuTruck className="account-pic" id="list-pics" />
                              <span className="account-options">Orders</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item pointer"
                              onClick={handleReviews}
                            >
                              <MdOutlineReviews
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item pointer"
                            onClick={handleLibrary}>
                              <IoLibrary
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">Library</span>
                            </a>
                          </li>
                        </>
                      )}
                      {userType === "seller" && (
                        <>
                          <li>
                            <a
                              className="dropdown-item pointer"
                              onClick={handlePublish}
                            >
                              <FaBookMedical
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">Publish</span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item pointer"
                              onClick={handleCollection}
                            >
                              <SiBookstack
                                className="account-pic"
                                id="list-pics"
                              />
                              <span className="account-options">
                                Collections
                              </span>
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
              {userType === "user" && (
                <li className="nav-item">
                  <a
                    className="nav-link d-flex lg-justify-content-center pointer"
                    onClick={handleCart}
                  >
                    <BsCart4 className="account-pic " />
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
                  {userType === "user" && (
                    <li>
                      <a
                        className="dropdown-item pointer"
                        onClick={handleSellerAC}
                      >
                        <BsShop className="account-pic" id="list-pics" />
                        <span className="account-options">Be a Seller</span>
                      </a>
                    </li>
                  )}
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

      {(activeModal === "profile" || activeModalSeller === "profile") && (
        <ProfieModel closeModel={handleCloseModal} userType={userType}/>
       
      )}
      
      {activeModalSeller === "review" && (
        <Container>
          <Row>
            <Col>
              <Modal
                show={true}
                onHide={handleCloseModal}
                className="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Reviews </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <ReviewModalContent />
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <MyButton myval="Close" onClick={handleCloseModal} />
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      )}
      {activeModal === "subscribe" && (
        <Container>
          <Row>
            <Col>
              <Modal
                show={true}
                onHide={handleCloseModal}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Subscription Plans </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <UserSubscriptionPlan/>
                </Modal.Body>
                <Modal.Footer>
                  <MyButton myval="Close" onClick={handleCloseModal} />
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default NavbarComponent;
