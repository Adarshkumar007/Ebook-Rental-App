import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../redux/actions/authActions";
import { url } from "../url";
import { Container } from "react-bootstrap";
import CartCard from "./CartCard";
import './MyComponent/MyCSS/Cart.css';
import EmptyComponent from "./MyComponent/EmptyComponent";
import Loading from "./MyComponent/Loading";

const Cart = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [bookIds, setBookIds] = useState([]);
  const [bookInfos, setBookInfos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookIds = async () => {
      try {
        const response = await axios.get(url + "/api/getBookIds", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBookIds(response.data.bookIds);
        console.log("Book IDs:", response.data.bookIds);
      } catch (error) {
        console.error(
          "Error fetching book ids:",
          error.response ? error.response.data : error.message
        );
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchBookIds();
    } else {
      dispatch(setActiveModal("login", "user"));
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const bookInfoPromises = bookIds.map((bookId) =>
          axios.get(url + `/ebook?key=${bookId}`)
        );
        const bookInfoResponses = await Promise.all(bookInfoPromises);
        const bookInfos = bookInfoResponses.map((response) => response.data);
        setBookInfos(bookInfos);
      } catch (error) {
        console.error(
          "Error fetching book info:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (bookIds.length > 0 && isAuthenticated) {
      setBookInfos([]);
      fetchBookInfo();
    }
  }, [bookIds, isAuthenticated]);

  const handleCartBooks = (bookIdToRemove) => {
    const updatedBookIds = bookIds.filter(id => id !== bookIdToRemove);
    setBookIds(updatedBookIds);
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : bookIds.length === 0 ? (
        <EmptyComponent message="Your Cart Is Empty" />
      ) : (
        <div className="cart-container">
          {bookInfos.map((book, index) => (
            <CartCard 
              key={index} 
              book={book} 
              handleCartBooks={() => handleCartBooks(book.id)} 
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Cart;
