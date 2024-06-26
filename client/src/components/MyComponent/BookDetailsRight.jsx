import React, { useState } from "react";
import "../MyComponent/MyCSS/BookDetailsLeft.css";
import "./MyCSS/BookDetailsContainer.css";
import { url } from "../../url";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../../redux/actions/authActions";
import { CURRENT_BOOKID } from "../../redux/actions/types";

const BookDetailsRight = ({
  bookId,
  title,
  publisher,
  category,
  description,
  onClick,
}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showModal, setShowModal] = useState(false);

  const handleCart = async () => {
    if (!isAuthenticated) {
      dispatch(setActiveModal("login", "user"));
    } else {
      try {
        const response = await axios.post(
          url + "/addcart",
          {
            bookId: bookId,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        dispatch(setActiveModal("addedToCart", "user"));
      } catch (error) {
        console.error(
          "Error adding e-book:",
          error.response ? error.response.data : error.message
        );
      }
    }
  };

  const handleSubscribe = () => {
    if (isAuthenticated) {
      dispatch(setActiveModal("subscribe", "user"));
      dispatch({
        type: CURRENT_BOOKID,
        currentBookID: bookId,
      });
    } else {
      dispatch(setActiveModal("login", "user"));
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="right-container">
      <h2 className="book-content" style={{ fontWeight: "600" }}>
        {title}
      </h2>
      <h6 className="book-content">
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>
          Category:{" "}
        </span>
        {category}
      </h6>
      <h6 className="book-content" style={{ marginBottom: "20px" }}>
        <span style={{ color: "#000d42ab", fontWeight: "400" }}>
          Publisher:{" "}
        </span>
        {publisher}
      </h6>
      <div className="bookbutton-list">
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "6rem", border: "2px solid #000d42" }}
          onClick={onClick}
        >
          Preview
        </button>
        <button
          type="button"
          className="btn btn-info"
          style={{ width: "6rem", border: "2px solid #000d42" }}
          onClick={handleCart}
        >
          Add Cart
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={{ width: "6rem", border: "2px solid #000d42" }}
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <span
        className="book-content"
        style={{ color: "#000d42ab", fontWeight: "400" }}
      >
        Description:
      </span>
      <p style={{ textAlign: "justify" }}>{description}</p>
    </div>
  );
};

export default BookDetailsRight;
