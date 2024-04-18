import React from 'react';
import '../MyComponent/MyCSS/BookDetailsLeft.css';
import './MyCSS/BookDetailsContainer.css'

const BookDetailsRight = ({ title, publisher, category, description ,onClick}) => {
  


    return (
        <div
            className="right-container"
           
        >
            <h2 style={{ fontWeight: "600" }}>{title}</h2>
            <h6>
                <span style={{ color: "#000d42ab", fontWeight: "400" }}>Category: </span>
                {category}
            </h6>
            <h6 style={{ marginBottom: "20px" }}>
                <span style={{ color: "#000d42ab", fontWeight: "400" }}>Publisher: </span>
                {publisher}
            </h6>
            <div style={{display:'flex',gap:'10px',marginBottom: "20px"}}>
            <button type="button" className="btn btn-info" style={{width:'6rem',border: "2px solid #000d42"}} onClick={onClick}>Preview</button>
            <button type="button" className="btn btn-danger" style={{width:'6rem',border: "2px solid #000d42"}}>Subscribe</button>
            </div>
            <span style={{ color: "#000d42ab", fontWeight: "400" }}>Description:</span>
            <p style={{ textAlign: "justify" }}>{description}</p>
            
        </div>
    );
}

export default BookDetailsRight;
