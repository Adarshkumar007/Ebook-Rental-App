import { Col, Container, Modal, Row } from "react-bootstrap";
import UserProfile from "../../UserProfile";
import MyButton from "../MyButton";
const ProfieModel = ({closeModel,userType}) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel}>
            <Modal.Header closeButton>
              <Modal.Title>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <UserProfile userType={userType} />
            </Modal.Body>
            <Modal.Footer>
              <MyButton myval="Close" onClick={closeModel} />
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfieModel;
