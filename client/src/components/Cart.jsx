import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../redux/actions/authActions";
import { url } from "../url";
import { Container } from "react-bootstrap";
import CartCard from "./CartCard";
import './MyComponent/MyCSS/Cart.css'

import img1 from './images/built.jpg'
import img2 from './images/image1.jpg'
import img3 from './images/image2.jpg'
import img4 from './images/image3.jpg'
import img5 from './images/image4.jpg'
import img6 from './images/image5.jpg'
const books=[
img1,img2,img3,img4,img5,img6
];

const Cart = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [bookIds, setBookIds] = useState([]);
  const [bookInfos, setBookInfos] = useState([]);

  useEffect(() => {
    const fetchBookIds = async () => {
      try {
        const response = await axios.get(url + "/api/getBookIds", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setBookIds(response.data.bookIds);
      } catch (error) {
        console.error(
          "Error fetching book ids:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (isAuthenticated) {
      fetchBookIds();
    } else {
      dispatch(setActiveModal("login", "user"));
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    const fetchBookInfo = async (bookId) => {
      try {
        const response = await axios.get(url + `/ebook?key=${bookId}`); // Assuming you have an endpoint to fetch book info by book id
        setBookInfos((prevBookInfos) => [...prevBookInfos, response.data]);
      } catch (error) {
        console.error(
          "Error fetching book info:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (bookIds.length > 0) {
      bookIds.forEach((bookId) => fetchBookInfo(bookId));
    }
  }, [bookIds]);
  console.log(bookInfos);
  return (
    <Container>
      <div className="cart-container">
        {books.map((book,index)=><CartCard key={index} book={book} />)}
        
      </div>
    </Container>
  );
};

export default Cart;
