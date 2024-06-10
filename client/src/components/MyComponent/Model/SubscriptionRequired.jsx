import { Col, Container, Modal, Row } from "react-bootstrap";
import SubscribeRequiredAlert from "../Alert/SubscribeRequiredAlert";
const SubscriptionRequired = ({ closeModel, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel} className="addToCart">
            <Modal.Body>
              <SubscribeRequiredAlert closeModel={closeModel} />
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};
export default SubscriptionRequired;
