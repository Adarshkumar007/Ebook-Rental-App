import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./MyCSS/SellerBookDetailsRight.css";
import AllReviewStar from "./ReviewComponents/AllReviewStar";
// import ReviewModalContent from "./ReviewModalContent"; // Assuming you have a separate component for the modal content

const SellerBookDetailsRight = ({ id, title, category, publisher, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleView = () => {
    console.log("hello");
    window.open(`/ebook/${id}`, "_blank");
  };

  const handleReviews = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="right-container1">
      <h2 style={{ fontWeight: "600", marginBottom: "0" }}>{title}</h2>
      <AllReviewStar rate={4} />
      <h6>
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>Category: </span>
        {category}
      </h6>
      <h6 style={{ marginBottom: "10px" }}>
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>Publisher: </span>
        {publisher}
      </h6>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "5rem", border: "2px solid #000d42" }}
          onClick={handleView}
        >
          View
        </button>
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "5rem", border: "2px solid #000d42" }}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "5rem", border: "2px solid #000d42" }}
          onClick={handleReviews}
        >
          Reviews
        </button>
      </div>
      <span style={{ color: "#000d42ab", fontWeight: "400" }}>Description:</span>
      <p style={{ textAlign: "justify" }}>{description}</p>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ReviewModalContent ebookId={id} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellerBookDetailsRight;
