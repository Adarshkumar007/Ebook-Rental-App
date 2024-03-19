import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Navbar, Nav, Modal, Button,Col,Row,Container } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';
import { clearError } from '../redux/actions/authActions';
import { logout } from '../redux/actions/authActions';

const NavbarComponent = () => {
  const [activeModal, setActiveModal] = useState(null);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  const handleShowModal = (modalName) => {
    setActiveModal(modalName);
  };
  const handlelogout=()=>{
    dispatch(logout());
  }
  const handleCloseModal = () => {
    setActiveModal(null);
    dispatch(clearError());
  };
  return (
    <>
        <Navbar bg="red" expand="lg">
        <Navbar.Brand href="#">Rent Readers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            { !isAuthenticated && <>
            <Nav.Link onClick={() => handleShowModal('login')}>Login</Nav.Link>
            <Nav.Link onClick={() => handleShowModal('signup')}>Signup</Nav.Link></>
            }
            {
              isAuthenticated &&
              <Nav.Link onClick={handlelogout}>Logout</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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

export default NavbarComponent;
