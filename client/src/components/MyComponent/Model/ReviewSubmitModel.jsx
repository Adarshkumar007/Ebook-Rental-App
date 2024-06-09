import { Col, Container, Modal, Row } from "react-bootstrap";
import MyReviewAlert from "../Alert/MyReviewAlert";
const ReviewSubmitModel = ({ closeModel, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel} className="addToCart">
            <Modal.Body>
              <MyReviewAlert closeModel={closeModel} />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewSubmitModel;
