import React from 'react';
import '../MyComponent/MyCSS/BookDetailsLeft.css'
import "bootstrap/dist/css/bootstrap.css";


const BookDetailsLeft = ({ image }) => {
    return (
           
         
            <img src={image} alt="Book Cover" className="card-img1" />
           
           
    )
}

export default BookDetailsLeft;
