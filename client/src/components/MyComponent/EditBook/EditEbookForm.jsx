
import { Container, Form } from "react-bootstrap";
import MyInput from "../MyInput";
import MyTextArea from "../MyTextArea";
import SuccessButton from "../SuccessButton";
import Category from "../Category";
import "../../MyComponent/MyCSS/Publish.css";
import EditSubscriptionVariation from "./EditSubscriptionVariation";

function EditEbookForm() {
  
  

  return (
    <Container>
      <div className="Publish-Container">
        <div className="Publish-Title">
          <h2 className="Publish-Heading">Add E-Book Details</h2>
        </div>
        <div className="Book-Information">
          <form onSubmit={()=>{}} className="Book-Form">
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
                {/* {error} */}
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
                {/* {message} */}
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
                    value=""
                    onChange={()=>{}}
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
                    value=""
                    onChange={()=>{}}
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
                    value=""
                    onChange={() => {}}
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
                  value=""
                  readOnly
                />

                <input
                  type="file"
                  className="form-control-file d-none"
                  id="image"
                  accept=".png,.svg,.jpg,.jpeg"
                  onChange={()=>{}}
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
                  value=""
                  readOnly
                />

                <input
                  type="file"
                  className="form-control-file d-none"
                  id="previewFile"
                  accept=".pdf"
                  onChange={()=>{}}
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
                  value=""
                  readOnly
                />
                <input
                  type="file"
                  className="form-control-file d-none"
                  id="file"
                  accept=".pdf"
                  onChange={()=>{}}
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
                    value=""
                    handleSetCategory={()=>{}}
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
            <EditSubscriptionVariation handlePlan={()=>{}}/>
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
        <SuccessButton myval="Add E-Book" onClick={()=>{}} />
      </div>
    </Container>
  );
}

export default EditEbookForm;
