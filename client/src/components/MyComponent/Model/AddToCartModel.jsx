import { Col, Container, Modal, Row } from "react-bootstrap";
import AddToCartAlert from "../Alert/AddToCartAlert";


const AddToCartModal = ({ closeModel, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel} className="addToCart">
            <Modal.Body>
                <AddToCartAlert closeModel={closeModel}/>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default AddToCartModal;
