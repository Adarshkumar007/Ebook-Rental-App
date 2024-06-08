import "bootstrap/dist/css/bootstrap.css";
import { IoRemoveCircle } from "react-icons/io5";
import { useState } from "react";
import LoadingSpinner from "./MyComponent/LoadingSpinner";
import axios from "axios";
import { url } from "../url";

const CartCard = ({ book, handleCartBooks }) => {
  const [loading, setLoading] = useState(true); // State to manage image loading

  const handleOnClick = () => {
    window.open(`/ebook/${book.id}`);
  };

  const handleRemove = () => {
    axios
      .get(url + `/removefromcart/${book.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        handleCartBooks();
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <div className="card cart-card">
      {loading && <LoadingSpinner />} {/* Show spinner while loading */}
      <img
        src={book.imageSrc}
        className="card-img-top"
        alt={book.title}
        onLoad={() => setLoading(false)} // Update loading state when image loads
        style={{ display: loading ? "none" : "block" }} // Hide image until loaded
      />
      <div className="card-body">
        <IoRemoveCircle
          className="removeBook"
          size={25}
          onClick={handleRemove}
        />
        <a href="#" className="details btn btn-primary" onClick={handleOnClick}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default CartCard;
