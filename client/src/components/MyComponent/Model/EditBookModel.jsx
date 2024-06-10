import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "../MyButton";
import EditEbookForm from "../EditBook/EditEbookForm";

const EditBookModel = ({ closeModel, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel} className="custom-modal">
            <Modal.Header closeButton>
              <Modal.Title>Edit Book </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <EditEbookForm/>
              </Container>
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

export default EditBookModel;
