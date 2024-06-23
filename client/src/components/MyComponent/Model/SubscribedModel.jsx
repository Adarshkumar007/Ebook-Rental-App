import { Col, Container, Modal, Row } from "react-bootstrap";
import SubscribedAlert from "../Alert/SubscribedAlert";
const SubscribedModel = ({ closeModel, userType,msg }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel} className="addToCart">
            <Modal.Body>
              <SubscribedAlert closeModel={closeModel} msg={msg}/>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default SubscribedModel;
