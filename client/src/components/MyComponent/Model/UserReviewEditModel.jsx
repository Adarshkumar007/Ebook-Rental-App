import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "../MyButton";
import { useState } from "react";
import Loading from "../Loading";
import MyReviewEdit from "../UserReview/MyReviewEdit";
const UserReviewEditModel = ({closeModel,userType}) => {
  const [loading,setLoading]=useState(true);

  setTimeout(()=>{setLoading(false)},1000);
 
  return (
    <Container>
      <Row>
        <Col>
          <Modal show={true} onHide={closeModel}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Review</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             {
              loading? (
                <Loading/>
              ):(
                
                <MyReviewEdit/>
              )
             }
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
export default UserReviewEditModel;
