import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserTypeAction } from "../redux/actions/authActions";
import { Container, Form } from "react-bootstrap";
import MyInput from "./MyComponent/MyInput";
import MyTextArea from "./MyComponent/MyTextArea";
import SuccessButton from "./MyComponent/SuccessButton";
import Category from "./MyComponent/Category";
import { url } from "../../src/url";

import "./MyComponent/MyCSS/Publish.css";
import SubscriptionVariation from "./MyComponent/SubscriptionVariationContainer/SubscriptionVariation";

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
  const [preFile, setPreFile] = useState(null);
  const [preFileName, setPreFileName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [category, handleSetCategory] = useState("");
  const [plans , setPlans] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const preFileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  useEffect(() => {
    dispatch(setUserTypeAction("seller"));
    console.log("user is", userType);
    if (!isSellerAuthenticated) {
      navigate("/seller");
    }
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0].name) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };
  const handlePreFileChange = (e) => {
    if (e.target.files[0].name) {
      setPreFile(e.target.files[0]);
      setPreFileName(e.target.files[0].name);
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0].name) {
      setImage(e.target.files[0]);
      setImageName(e.target.files[0].name);
    }
  };
  const handlePlan = (plans) =>{
    setPlans(plans);
    console.log("plans",typeof plans);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state
    console.log("handle")
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);
    formData.append("file", file);
    formData.append("prefile", preFile);
    formData.append("image", image);
    formData.append("category", category);
    formData.append("plans",JSON.stringify(plans));
    try {
      const response = await axios.post(url + "/publish", formData, {
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
      });

      console.log(response.data);
      setMessage(response.data);
      setError("");

      // Clear input fields
      setTitle("");
      setAuthor("");
      setDescription("");
      setFile(null);
      setFileName("");
      setImage(null);
      setImageName("");
      setPreFile(null);
      setPreFileName("");
      handleSetCategory("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      if (preFileInputRef.current) preFileInputRef.current.value = "";
      if (imageInputRef.current) imageInputRef.current.value = "";
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
    <Container>
      <div className="Publish-Container">
        <div className="Publish-Title">
          <h2 className="Publish-Heading">Add E-Book Details</h2>
        </div>
        <div className="Book-Information">
          <form onSubmit={handleSubmit} className="Book-Form">
            <h4>
              <div
                className="error"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "red",
                }}
              >
                {error}
              </div>
            </h4>
            <h4>
              <div
                className="error"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "green",
                }}
              >
                {message}
              </div>
            </h4>

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
                  placeholder="Pre-View File"
                  className="form-control"
                  value={preFileName}
                  readOnly
                />

                <input
                  type="file"
                  className="form-control-file d-none"
                  id="previewFile"
                  accept=".pdf"
                  onChange={handlePreFileChange}
                />
                <label htmlFor="previewFile" className="input-group-text">
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
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <label htmlFor="file" className="input-group-text">
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
              <Form.Group
                controlId="title"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Category
                    value={category}
                    handleSetCategory={handleSetCategory}
                    style={{ width: "70%" }}
                  />
                </div>
              </Form.Group>
            </div>

            {/* <button type="submit" className="btn btn-primary">
          Add E-Book
        </button> */}
          </form>
          <div  className="SubscriptionPlanContainer">
            <SubscriptionVariation handlePlan={handlePlan}/>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"10px"
        }}
      >
        <SuccessButton myval="Add E-Book" onClick={handleSubmit} />
      </div>
    </Container>
  );
}

export default AddEBookForm;
