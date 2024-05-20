import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../redux/actions/authActions";
import { url } from "../url";
import { Container } from "react-bootstrap";
import CartCard from "./CartCard";
import './MyComponent/MyCSS/Cart.css'
import CartEmpty from "./CartEmpty";


const Cart = () => {
  var flag=0;
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
        console.log("Book ID",response.data.bookIds);
      } catch (error) {
        console.error(
          "Error fetching book ids:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (isAuthenticated ) {
      if(flag===0){
        flag=1;
        fetchBookIds();
        console.log("hiii");
      }
    } else {
      dispatch(setActiveModal("login", "user"));
      console.log("helo")
    }
  }, [isAuthenticated]);

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

    if (bookIds.length > 0 && isAuthenticated) {
      setBookInfos([]);
      bookIds.forEach((bookId) => fetchBookInfo(bookId));
    }
  }, [bookIds]);
  const handleCartBooks = (bookIdToRemove) => {
    const updatedBookIds = bookIds.filter(id => id !== bookIdToRemove);
    setBookIds(updatedBookIds);
};

  return (
    <Container>
    {bookIds.length===0 && <CartEmpty/>}
      <div className="cart-container">
      {bookIds.length!==0 && bookInfos.map((book,index)=>
    <CartCard key={index} book={book} handleCartBooks={() => handleCartBooks(book.id)} />
)}
        
      </div>
    </Container>
  );
};

export default Cart;
