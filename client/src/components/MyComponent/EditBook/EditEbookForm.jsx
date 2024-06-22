import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import MyInput from "../MyInput";
import MyTextArea from "../MyTextArea";
import SuccessButton from "../SuccessButton";
import Category from "../Category";
import "../../MyComponent/MyCSS/Publish.css";
import EditSubscriptionVariation from "./EditSubscriptionVariation";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setActiveModal } from "../../../redux/actions/authActions";
import { url } from "../../../url";
import LoadingSpinner from "../LoadingSpinner";
import FormErrorDisplay from "../FormErrorDisplay";

function EditEbookForm() {
  const bookinfo = useSelector((state) => state.bookInfoReducer.bookinfo);
  const dispatch = useDispatch();
  const [id, setId] = useState(bookinfo.id || "");
  const [title, setTitle] = useState(bookinfo.title || "");
  const [author, setAuthor] = useState(bookinfo.publisher || "");
  const [description, setDescription] = useState(bookinfo.description || "");
  const [category, setCategory] = useState(bookinfo.category || "");
  const [image, setImage] = useState(null);
  const [preFile, setPreFile] = useState(null);
  const [file, setFile] = useState(null);
  const [plan, setPlans] = useState(bookinfo.plan || []);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [load, setLoad] = useState(false);

  // Validation errors state
  const [titleError, setTitleError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (category) => setCategory(category);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handlePreFileChange = (e) => setPreFile(e.target.files[0]);
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handlePlanChange = (plans) => setPlans(plans);

  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();

    // Title validation
    if (!title.trim()) {
      setError("Title is required");
      setLoad(false);
      return;
    }
    const capitalizedTitle = title
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());

    // Author validation
    if (!author.trim()) {
      setError("Author name is required");
      setLoad(false);
      return;
    }
    const validAuthor = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!validAuthor.test(author.trim())) {
      setError("Invalid author name format");
      setLoad(false);
      return;
    }
    const capitalizedAuthor = author
      .trim()
      .replace(/\b\w/g, (char) => char.toUpperCase());

    // Description validation
    if (!description.trim() || description.trim().length < 2000) {
      setError("Description is required and must be at least 2000 characters");
      setLoad(false);
      return;
    }

    // Category validation
    if (!category.trim()) {
      setError("Category is required");
      setLoad(false);
      return;
    }

    // Subscription plan validation
    if (
      plan.length === 0 ||
      plan.some((plan) => !plan.month || !plan.price)
    ) {
      setError(
        "Please provide at least one subscription plan with valid month and price"
      );
      setLoad(false);
      return;
    }

    const formData = new FormData();
    formData.append("id", id);
    formData.append("title", capitalizedTitle);
    formData.append("author", capitalizedAuthor);
    formData.append("image", image); // assuming image is a File object
    formData.append("category", category);
    formData.append("description", description);
    formData.append("plan", JSON.stringify(plan));
    formData.append("file", file); // assuming file is a File object
    formData.append("prefile", preFile); // assuming preFile is a File object
    try {
      const response = await axios.post(url + "/api/ebookupdate", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("sellertoken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("E-Book updated successfully!");
      // dispatch(setActiveModal(null, "seller"));
      setError("");
    } catch (error) {
      setError("Update Failed");
      setMessage("");
      console.log("Error:", error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <Container>
      <div className="Publish-Container">
        <div className="Publish-Title">
          <h2 className="Publish-Heading">Edit E-Book Details</h2>
        </div>
        {load && (
          <div className="Publish-Title">
            <LoadingSpinner />
          </div>
        )}
        <div className="Book-Information">
          <form onSubmit={handleSubmit} className="Book-Form">
            {(error || message) && (
              <div className="signUpAlert">
                <FormErrorDisplay
                  message={error || message}
                  type={error ? "error" : "success"}
                />
              </div>
            )}

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
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
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
                    name="author"
                    value={author}
                    onChange={handleAuthorChange}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="mb-3">
              <Form.Group controlId="description">
                <div
                  style={{
                    marginBottom: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MyTextArea
                    type="text"
                    label=""
                    placeholder="Describe the Book"
                    name="description"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="number-of-character">
                  <span>Characters:</span>
                  <span>{description.length}</span>
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
                  value={image ? image.name : ""}
                  readOnly
                />
                <input
                  type="file"
                  className="form-control-file d-none"
                  id="image"
                  name="image"
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
                  value={preFile ? preFile.name : ""}
                  name="preFile"
                  readOnly
                />
                <input
                  type="file"
                  className="form-control-file d-none"
                  id="previewFile"
                  name="preFile"
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
                  name="file"
                  placeholder="E-book File"
                  value={file ? file.name : ""}
                  readOnly
                />
                <input
                  type="file"
                  className="form-control-file d-none"
                  id="file"
                  name="file"
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
                controlId="category"
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
                    handleSetCategory={handleCategoryChange}
                    style={{ width: "70%" }}
                  />
                </div>
              </Form.Group>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <SuccessButton myval="Update E-Book" onClick={handleSubmit} />
            </div>
          </form>
          <div className="SubscriptionPlanContainer">
            <EditSubscriptionVariation
              plan={plan}
              handlePlan={handlePlanChange}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default EditEbookForm;
