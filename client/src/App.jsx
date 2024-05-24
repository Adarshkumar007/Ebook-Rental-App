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
    "fiction", "non-fiction", "mystery", "thriller", "science-fiction", "fantasy", "romance", "horror", "historical-fiction", "literary-fiction", "young-adult", "children", "biography", "autobiography", "memoir", "self-help", "business", "finance", "health", "cooking", "travel", "history", "science", "mathematics", "technology", "engineering", "art", "music", "photography", "sports", "gardening", "crafts", "religion", "philosophy", "psychology", "sociology", "political", "environmental", "education", "language", "reference", "fiction-classics", "poetry", "short-stories", "drama", "essays", "anthology", "comics", "manga", "satire", "tragedy", "fantasy-epic", "fantasy-urban", "fantasy-historical", "fantasy-dark", "fantasy-light", "fantasy-mythical"
  ], []);

  useEffect(() => {
    let isMounted = true;

    const fetchCategories = async (index) => {
      if (isMounted && index < categoryTypes.length) {
        const category = categoryTypes[index];
        console.log("cat", category, index);
        try {
          const categoryResponse = await axios.get(url + `/api/home/${category}`);
          if (categoryResponse.data.length !== 0) {
            setEbooks(prevEbooks => [...prevEbooks, categoryResponse.data]);
          }
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
        fetchCategories(index + 1); // Call fetchCategories recursively with the next index
      }
    };

    fetchCategories(0); // Start with index 0

    return () => {
      isMounted = false; // This will prevent fetchCategories from executing after the component is unmounted or when the effect is cleaned up
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
