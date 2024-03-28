import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserTypeAction } from "../redux/actions/authActions";
import { Form } from "react-bootstrap";
import MyInput from "./MyComponent/MyInput";
import MyTextArea from "./MyComponent/MyTextArea";
import SuccessButton from "./MyComponent/SuccessButton";
import Category from "./MyComponent/Category";
function AddEBookForm() {
  const isSellerAuthenticated = useSelector(
    (state) => state.sellerauth.isAuthenticated
  );
  const userType = useSelector((state) => state.setUserType.USER_TYPE);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [category, handleSetCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserTypeAction("seller"));
    console.log("user is", userType);
    if (!isSellerAuthenticated) {
      navigate("/seller");
    }
  }, []);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("image", image);
    formData.append("category",category);

    try {
      const response = await axios.post(
        "http://localhost:5000/publish",
        formData,
        {
          params: {
            userType: userType,
          },
          headers: {
            Authorization: `Bearer ${
              userType === "seller"
                ? localStorage.getItem("sellertoken")
                : localStorage.getItem("token")
            }`,
          },
        }
      );

      console.log(response.data);
      setMessage(response.data);
      setError("");
    } catch (error) {
      console.error(
        "Error adding e-book:",
        error.response ? error.response.data : error.message
      );
      setMessage("");

      setError(error.message);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized error (e.g., redirect to login page)
      } else if (error.response && error.response.status === 400) {
        // Handle bad request error (e.g., display error message)
      } else {
        // Handle other errors
      }
    }
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          marginTop: "10px",
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "27px",
          fontWeight: "bold",
        }}
      >
        Add E-Book Details
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <h4><div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center",color: "red"}}>{error}</div></h4>
         <h4><div className="error" style={{ display:"flex",justifyContent:"center",alignItems:"center",color: "green"}}>{message}</div></h4>
        
        <div className="mb-3">
          <Form.Group controlId="title">
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MyInput
                type="text"
                label=""
                placeholder="Enter Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </Form.Group>
        </div>
        <div className="mb-3">
          <Form.Group controlId="author">
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MyInput
                type="text"
                label=""
                placeholder="Enter Author Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </Form.Group>
        </div>

        <div className="mb-3">
          <Form.Group controlId="description">
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MyTextArea
                type="text"
                label=""
                placeholder="Describe the Book"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </Form.Group>
        </div>
        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="input-group"
            style={{
              width: "70%",
            }}
          >
            <input
              type="text"
              placeholder="Cover Image"
              className="form-control"
              value={imageName}
              readOnly
            />

            <input
              type="file"
              className="form-control-file d-none"
              id="image"
              accept=".png,.svg,.jpg,.jpeg"
              onChange={handleImageChange}
            />
            <label htmlFor="image" className="input-group-text">
              Browse
            </label>
          </div>
        </div>

        <div
          className="mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="input-group"
            style={{
              width: "70%",
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="E-book File"
              value={fileName}
              readOnly
            />
            <input
              type="file"
              className="form-control-file d-none"
              id="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="input-group-text">
              Browse
            </label>
          </div>
        </div>
        
          <div className="mb-3"  style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           
          }}>
            <Form.Group controlId="title"  style={{width:"100%", display: "flex",
            justifyContent: "center",
            alignItems: "center",
                }}>
              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width:"70%"
                }}
              >
                <Category
                value={category}
                handleSetCategory={handleSetCategory}
                style={{width:"70%"}}
                />
              </div>
            </Form.Group>
          </div>
        
        <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
        <SuccessButton myval="Add E-Book" type="submit" />
        </div>

        {/* <button type="submit" className="btn btn-primary">
          Add E-Book
        </button> */}
      </form>
    </div>
  );
}

export default AddEBookForm;
