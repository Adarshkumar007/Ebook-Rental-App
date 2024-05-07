import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import "./MyCSS/SellerBookDetailsRight.css";
import AllReviewStar from "./ReviewComponents/AllReviewStar";
import { setActiveModal } from "../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import ReviewModalContent from "./SellerBookReview/ReviewModalContent";
import MyButton from "./MyButton";
import { CURRENT_BOOKID } from "../../redux/actions/types";

const SellerBookDetailsRight = ({
  id,
  title,
  category,
  publisher,
  description,
}) => {
  // const [showModal, setShowModal] = useState(false);
  const activeModal = useSelector((state) => state.sellerauth.activeModal);
  const dispatch = useDispatch();
  const handleView = () => {
    console.log("hello");
    window.open(`/ebook/${id}`, "_blank");
  };

  const handleReviews = (id) => {
    dispatch(setActiveModal("review", "seller"));
    console.log("clicked",id);
    dispatch({
      type: CURRENT_BOOKID,
      currentBookID: id,
    });
  };



  return (
    <div className="right-container1">
      <h2 style={{ fontWeight: "600", marginBottom: "0" }}>{title}</h2>
      <AllReviewStar rate={4} />
      <h6>
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>
          Category:{" "}
        </span>
        {category}
      </h6>
      <h6 style={{ marginBottom: "10px" }}>
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>
          Publisher:{" "}
        </span>
        {publisher}
      </h6>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
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
          onClick={()=>handleReviews(id)}
        >
          Reviews
        </button>
      </div>
      <span style={{ color: "#000d42ab", fontWeight: "400" }}>
        Description:
      </span>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </div>
  );
};

export default SellerBookDetailsRight;
