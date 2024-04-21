import React from 'react';
import '../MyComponent/MyCSS/SellerBookLeft.css'
import "bootstrap/dist/css/bootstrap.css";


const SellerBookLeft = ({ image }) => {
    
    return (
           
         
            <img src={image} alt="Book Cover" className="card-img2" />
           
           
    )
}

export default SellerBookLeft;
