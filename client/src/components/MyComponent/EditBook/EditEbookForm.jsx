import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import MyInput from '../MyInput';
import MyTextArea from '../MyTextArea';
import SuccessButton from '../SuccessButton';
import Category from '../Category';
import '../../MyComponent/MyCSS/Publish.css';
import EditSubscriptionVariation from './EditSubscriptionVariation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setActiveModal } from '../../../redux/actions/authActions';
import { url } from '../../../url';

function EditEbookForm() {
  const bookinfo = useSelector((state) => state.bookInfoReducer.bookinfo);
  const dispatch = useDispatch();
  const [id,setId] =useState(bookinfo.id||"");
  const [title, setTitle] = useState(bookinfo.title || '');
  const [author, setAuthor] = useState(bookinfo.publisher || '');
  const [description, setDescription] = useState(bookinfo.description || '');
  const [category, setCategory] = useState(bookinfo.category || '');
  const [image, setImage] = useState(null);
  const [preFile, setPreFile] = useState(null);
  const [file, setFile] = useState(null);
  const [plan, setPlans] = useState(bookinfo.plan || []);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleAuthorChange = (e) => setAuthor(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCategoryChange = (category) => setCategory(category);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handlePreFileChange = (e) => setPreFile(e.target.files[0]);
  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handlePlanChange = (plans) => setPlans(plans);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
formData.append('id', id);
formData.append('title', title);
formData.append('author', author);
formData.append('image', image); // assuming image is a File object
formData.append('category', category);
formData.append('description', description);
formData.append('plan', JSON.stringify(plan));
formData.append('file', file); // assuming file is a File object
formData.append('prefile', preFile); // assuming preFile is a File object
try{
const response = await axios.post(url + "/api/ebookupdate", formData, {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("sellertoken")}`,
    'Content-Type': 'multipart/form-data',
  }
});
  
      setMessage('E-Book updated successfully!');
      dispatch(setActiveModal(null, "seller"));
      setError('');
    } catch (error) {
      setError('Failed to update E-Book');
      setMessage('');
      console.log("Error:", error);
    }
  };

  return (
    <Container>
      <div className="Publish-Container">
        <div className="Publish-Title">
          <h2 className="Publish-Heading">Edit E-Book Details</h2>
        </div>
        <div className="Book-Information">
          <form onSubmit={handleSubmit} className="Book-Form">
            <h4>
              <div
                className="error"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'red',
                }}
              >
                {error}
              </div>
            </h4>
            <h4>
              <div
                className="error"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'green',
                }}
              >
                {message}
              </div>
            </h4>

            <div className="mb-3">
              <Form.Group controlId="title">
                <div
                  style={{
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
              </Form.Group>
            </div>
            <div
              className="mb-3"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="input-group"
                style={{
                  width: '70%',
                }}
              >
                <input
                  type="text"
                  placeholder="Cover Image"
                  className="form-control"
                  value={image ? image.name : ''}
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="input-group"
                style={{
                  width: '70%',
                }}
              >
                <input
                  type="text"
                  placeholder="Pre-View File"
                  className="form-control"
                  value={preFile ? preFile.name : ''}
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="input-group"
                style={{
                  width: '70%',
                }}
              >
                <input
                  type="text"
                  className="form-control"
                  name="file"
                  placeholder="E-book File"
                  value={file ? file.name : ''}
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
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Form.Group
                controlId="category"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Category
                    value={category}
                    handleSetCategory={handleCategoryChange}
                    style={{ width: '70%' }}
                  />
                </div>
              </Form.Group>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <SuccessButton myval="Update E-Book" onClick={handleSubmit} />
            </div>
          </form>
          <div className="SubscriptionPlanContainer">
            <EditSubscriptionVariation plan={plan} handlePlan={handlePlanChange} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default EditEbookForm;
