import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setUserTypeAction } from './redux/actions/authActions';
import Swipper from './components/Swipper';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { url } from '../src/url';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

const App = () => {

  const [ebooks, setEbooks] = useState([]);
  const categoryTypes = ["fiction", "non-fiction", "mystery", "thriller", "science-fiction", "fantasy", "romance", "horror", "historical-fiction", "literary-fiction", "young-adult", "children", "biography", "autobiography", "memoir", "self-help", "business", "finance", "health", "cooking", "travel", "history", "science", "mathematics", "technology", "engineering", "art", "music", "photography", "sports", "gardening", "crafts", "religion", "philosophy", "psychology", "sociology", "political", "environmental", "education", "language", "reference", "fiction-classics", "poetry", "short-stories", "drama", "essays", "anthology", "comics", "manga", "satire", "tragedy", "fantasy-epic", "fantasy-urban", "fantasy-historical", "fantasy-dark", "fantasy-light", "fantasy-mythical"];
  const dispatch = useDispatch();
  dispatch(setUserTypeAction("user"));

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryDataList = await Promise.all(
          categoryTypes.map(async (category) => {
            const categoryResponse = await axios.get(url + `/api/home/${category}`);
            return categoryResponse.data;
          })
        );
        setEbooks(categoryDataList.filter(data => data.length > 0));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Container>
  {ebooks.map((ebookData, index) => (
    <>
    <h4 className="sider-cat">{ebookData[0].category}</h4>
    <Swipper key={index} ebook={ebookData} />
    </>
  ))}
</Container>

  );
};

export default App;
