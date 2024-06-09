import React, { useEffect, useState, useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';
import Swipper from './components/Swipper';
import { Container } from 'react-bootstrap';
import Loading from './components/MyComponent/Loading';
import axios from 'axios';
import { url } from '../src/url';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'


const App = () => {
  const [ebooks, setEbooks] = useState([]);
  const dispatch = useDispatch();
  dispatch(setUserTypeAction("user"));

  const categoryTypes = useMemo(() => [
    "Fiction", "Non-Fiction", "Mystery", "Thriller", "Science-Fiction", "Fantasy", "Romance", "Horror", "Historical-Fiction", "Literary-Fiction", "Young-Adult", "Children", "Biography", "Autobiography", "Memoir", "Self-Help", "Business", "Finance", "Health", "Cooking", "Travel", "History", "Science", "Mathematics", "Technology", "Engineering", "Art", "Music", "Photography", "Sports", "Gardening", "Crafts", "Religion", "Philosophy", "Psychology", "Sociology", "Political", "Environmental", "Education", "Language", "Reference", "Fiction-Classics", "Poetry", "Short-Stories", "Drama", "Essays", "Anthology", "Comics", "Manga", "Satire", "Tragedy", "Fantasy-Epic", "Fantasy-Urban", "Fantasy-Historical", "Fantasy-Dark", "Fantasy-Light", "Fantasy-Mythical"
  ], []);
  

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async (index) => {
      if (isMounted && index < categoryTypes.length) {
        const category = categoryTypes[index];
        try {
          const categoryResponse = await axios.get(url + `/api/home/${category}`);
          if (categoryResponse.data.length !== 0) {
            setEbooks(prevEbooks => [...prevEbooks, categoryResponse.data]);
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
        fetchCategories(index + 1); 
      }
    };

    fetchCategories(0); 

    return () => {
      isMounted = false; 
    };
  }, [categoryTypes]);

  return (
    <Container>
      {ebooks.length === 0 ? (
        <Loading/>
      ) : (
        ebooks.map((ebookData, index) => (
          <div key={index}>
            <h4 className="sider-cat">{ebookData[0].category}</h4>
            <Swipper key={ebookData[0].category} ebook={ebookData} />
          </div>
        ))
      )}
    </Container>
  );
};

export default App;
