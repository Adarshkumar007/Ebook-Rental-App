import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <Col>
            <h1>Login</h1>
            <Login />
          </Col>
          <Col>
            <h1>Sign Up</h1>
            <Signup />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};

export default App;
