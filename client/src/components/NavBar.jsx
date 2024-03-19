import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Login from './Login';
import Signup from './Signup';
import { clearError, setActiveModal } from '../redux/actions/authActions';
import { logout } from '../redux/actions/authActions';


import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';
import logo from'./images/logo.png';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CgProfile } from "react-icons/cg";
import { Col, Container, Modal, Row ,Button } from 'react-bootstrap';


const NavbarComponent = () => {
  const activeModal = useSelector(state => state.auth.activeModal);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const handleShowModal = (modalName) => {
    dispatch(setActiveModal(modalName));
  };
  const handlelogout=()=>{
    dispatch(logout());
  }
  const handleCloseModal = () => {
    dispatch(setActiveModal(null));
    dispatch(clearError());
  };

return(
  
  <>
  <nav className="shadow-lg navbar navbar-expand-lg bg-body-tertiary custom-rounded" style={{ fontFamily: '"DM Sans", sans-serif'}}>
  <div className="container-fluid ">
  <a className="navbar-brand" href="/" >
    <img src={logo} alt=""  className="navbar-brand mb-4 main-logo"/>
    
      <span className="title">RentReader</span>
      </a>
    
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="  collapse navbar-collapse" id="navbarSupportedContent">
  <form className="d-flex mb-2 search-bar" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
  <ul className="navbar-nav me-5 mb-2">
    {/* <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li> */}
    <li className="nav-item dropdown ">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      <CgProfile className="account-pic"/>
      </a>
      <ul className="dropdown-menu">
      { !isAuthenticated && <>
        <li><a className="dropdown-item pointer" onClick={() => handleShowModal('login')}>SignIn</a></li>
        <li><a className="dropdown-item pointer" onClick={() => handleShowModal('signup')}>SignUp</a></li>
        </>
      }
      {
        isAuthenticated &&
        <li><a className="dropdown-item pointer" onClick={handlelogout}>Logout</a></li>
      }
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </li>
  </ul>
</div>

  </div>
</nav>
<Container>
        <Row>
          <Col>
             {activeModal === 'login' && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Login />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer>
              </Modal>
            )}
            {activeModal === 'signup' && (
              <Modal show={true} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Signup />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
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
