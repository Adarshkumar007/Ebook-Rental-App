import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserTypeAction } from '../redux/actions/authActions';

function AddEBookForm() {
  const isSellerAuthenticated = useSelector(state => state.sellerauth.isAuthenticated);
  const userType = useSelector(state => state.setUserType.USER_TYPE);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(setUserTypeAction("seller"));
    console.log("user is",userType);
    if (!isSellerAuthenticated) {
      navigate('/seller');
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
    setError(''); // Reset error state

    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('image',image)

    try {
      const response = await axios.post('http://localhost:5000/add-ebook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error adding e-book:', error.response ? error.response.data : error.message);
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
    <div className="container">
      <h2>Add E-Book</h2>
      <form onSubmit={handleSubmit}>
        <h4>{error}</h4>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title:</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author:</label>
          <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Book Image:</label>
          <div className="input-group">
            <input type="text" className="form-control" value={fileName} readOnly />
            <input type="file" className="form-control-file d-none" id="file" accept=".png,.svg" onChange={handleFileChange} />
            <label htmlFor="file" className="input-group-text">Browse</label>
          </div>
        </div>
        <div className="mb-3">  
          <label htmlFor="file" className="form-label">File:</label>
          <div className="input-group">
            <input type="text" className="form-control" value={imageName} readOnly />
            <input type="file" className="form-control-file d-none" id="file" onChange={handleFileChange} />
            <label htmlFor="file" className="input-group-text">Browse</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add E-Book</button>
      </form>
    </div>
  );
}

export default AddEBookForm;
