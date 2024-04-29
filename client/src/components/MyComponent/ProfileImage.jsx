import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { BsPersonSquare } from "react-icons/bs";

const ProfileImage = ({image,handleSetFile}) => {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(image)||null;

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };  
  useEffect(() => {
    setImageSrc(image);
  }, [image]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      handleSetFile(file);
    }
  };

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <div
        className="image-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          backgroundColor: "#ccc",
          height: "80px",
          width: "80px",
          border: "2px solid #f2d44a",
          overflow: "hidden", // Ensure the image stays within the circular container
          position: "relative", // Position relative to allow positioning the icon
        }}
        onClick={handleImageUpload} // Open file picker when clicked
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="Profile"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover", // Ensure the image fills the container without stretching
            }}
          />
        ) : (
          <BsPersonSquare size={40} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        )}
      </div>
      {/* Hidden input for file upload */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ProfileImage;
