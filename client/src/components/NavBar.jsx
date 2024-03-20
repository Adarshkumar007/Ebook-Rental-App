import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import Signup from "./Signup";
import { clearError, setActiveModal } from "../redux/actions/authActions";
import { logout } from "../redux/actions/authActions";

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

const NavbarComponent = () => {
  const activeModal = useSelector((state) => state.auth.activeModal);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const handleShowModal = (modalName) => {
    dispatch(setActiveModal(modalName));
  };
  const handlelogout = () => {
    dispatch(logout());
  };
  const handleCloseModal = () => {
    dispatch(setActiveModal(null));
    dispatch(clearError());
    dispatch(setOTPError())
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
              <button
                className="btn btn-outline-success btn-border"
                type="submit"
              >
                Search
              </button>
            </form>

            <ul className="navbar-nav me-5">
              {/* <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li> */}
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle d-flex lg-justify-content-center "
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <CgProfile className="account-pic" />
                  {!isAuthenticated && (
                    <span
                      className="navi-items"
                      onClick={() => handleShowModal("login")}
                    >
                      Login
                    </span>
                  )}
                  {isAuthenticated && (
                    <span className="navi-items">MyName</span>
                  )}
                </a>

                <ul className="dropdown-menu">
                  {!isAuthenticated && (
                    <>
                      {/* <li><a className="dropdown-item pointer" onClick={() => handleShowModal('login')}><FaUserLock className="account-pic" id='list-pics'/><span className='account-options'>LogIn</span></a></li>
        <li><hr className="dropdown-divider"/></li> */}
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
                  {isAuthenticated && (
                    <>
                      <li>
                        <a className="dropdown-item pointer">
                          <FaUserCircle
                            className="account-pic"
                            id="list-pics"
                          />
                          <span className="account-options">My Profie</span>
                        </a>
                      </li>
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
                          <IoLibrary className="account-pic" id="list-pics" />
                          <span className="account-options">Library</span>
                        </a>
                      </li>

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
              <li className="nav-item">
                <a
                  className="nav-link d-flex lg-justify-content-center"
                  href="#"
                >
                  <BsCart4 className="account-pic" />
                  <span className="navi-items">Cart</span>
                </a>
              </li>

              {/* <li className="nav-item">
      <a className="nav-link d-flex lg-justify-content-center" href="#"><BsShop className="account-pic"/><span className='navi-items'>Become a Seller</span></a>
    </li> */}

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
                  <li>
                    <a className="dropdown-item pointer">
                      <BsShop className="account-pic" id="list-pics" />
                      <span className="account-options">Be a Seller</span>
                    </a>
                  </li>
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
            {activeModal === "login" && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Login />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
            {activeModal === "signup" && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Signup />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

// return (
//   <>
//       <Navbar bg="red" expand="lg">
//       <Navbar.Brand href="#">Rent Readers</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav classNameName="ml-auto">
//           { !isAuthenticated && <>
//           <Nav.Link onClick={() => handleShowModal('login')}>Login</Nav.Link>
//           <Nav.Link onClick={() => handleShowModal('signup')}>Signup</Nav.Link></>
//           }
//           {
//             isAuthenticated &&
//             <Nav.Link onClick={handlelogout}>Logout</Nav.Link>
//           }
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>

//

//   </>
// );

export default NavbarComponent;
