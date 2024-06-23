import React, { useEffect, useState } from "react";
import book1 from "../images/image1.jpg";
import book2 from "../images/image2.jpg";
import book3 from "../images/image3.jpg";
import book4 from "../images/image4.jpg";
import book5 from "../images/image5.jpg";
import book6 from "../images/image6.jpg";
import book7 from "../images/image7.jpg";
import book8 from "../images/image8.jpg";
import book9 from "../images/image9.jpg";
import book10 from "../images/image10.jpg";
import SingleSellerBook from "./SingleSellerBook";
import { url } from "../../url";
import axios from "axios";

const books = [
  { id: 1, image: book1 },
  { id: 2, image: book2 },
  { id: 3, image: book3 },
  { id: 4, image: book4 },
  { id: 5, image: book5 },
  { id: 6, image: book6 },
  { id: 7, image: book7 },
  { id: 8, image: book8 },
  { id: 9, image: book9 },
  { id: 10, image: book10 },
];

const AdminsellerBooks = ({sellerId}) => {
  const [bookinfo,setbookinfo] =useState([]);
  // /admin/bookinfo
  useEffect(()=>{
    const fetchbooks = async () => {
      try {
        const response = await axios.get(`${url}/admin/bookinfo`, {
          params: {
            sellerId: sellerId 
          }
        });      setbookinfo(response.data);
        console.log("response",response);
      } catch (error) {
      } finally {
      }
    }
    fetchbooks();
  
  },[]);
  return (
    <div className="seller-books">
      {bookinfo.map((book) => (
        <SingleSellerBook key={book._id} book={book} />
      ))}
    </div>
  );
};

export default AdminsellerBooks;
