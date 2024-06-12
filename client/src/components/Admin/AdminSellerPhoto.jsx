import React from 'react';
import myimage from '../images/officialphoto.jpg';

const AdminSellerPhoto = () => {
  return (
    <div className="Photo-button">
      <div className="Seller-Image shadows" >
        <img src={myimage} className="Seller-Image-pic" alt="sellerphoto" />
      </div>
      <button
        type="button"
        className="btn btn-primary block-button"
        style={{ 
          '--bs-btn-padding-y': '.25rem', 
          '--bs-btn-padding-x': '.5rem', 
          '--bs-btn-font-size': '.75rem' ,
          width:"80%",
          height:"2rem",
          fontSize:"15px",
          backgroundColor:"red"
        }}
      >
        Block
      </button>
    </div>
  );
};

export default AdminSellerPhoto;
