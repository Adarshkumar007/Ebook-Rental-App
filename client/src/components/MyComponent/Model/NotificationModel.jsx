import MyButton from "../MyButton";
import { Col, Container, Modal, Row } from "react-bootstrap";
import "../Notification/NotificationModel.css";
import UserNotification from "../Notification/UserNotification";
import SellerNotification from "../Notification/SellerNotification";
import { BookExpired } from "../Notification/BookExpired";
import { SellerNotify } from "../Notification/SellerNotify";
const NotificationModel = ({ closeModel, userType }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel}>
            <Modal.Header closeButton>
              <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body className="notification-body">
              {userType === "user" ? (
                BookExpired.map((bookexpired) => (
                  <UserNotification
                    key={bookexpired.book}
                    BookExpired={bookexpired}
                  />
                ))
              ) : (
                (SellerNotify.map((sellernotify)=><SellerNotification key={sellernotify.book} sellernotify={sellernotify}/>))
              )}
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

export default NotificationModel;
