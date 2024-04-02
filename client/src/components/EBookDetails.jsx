import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./MyComponent/Card";
<<<<<<< Updated upstream
import PdfViewer from "./MyComponent/PdfViewer";
import { Document, Page } from 'react-pdf';
import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "./MyComponent/MyButton";
import {url} from '../url';
=======
// import PdfViewer from "./MyComponent/PdfViewer";
import BookDetailsContainer from "./MyComponent/BookDetailsContainer";
import { Container } from "react-bootstrap";

>>>>>>> Stashed changes
const EBookDetails = () => {
    const { key } = useParams();
    const [ebook ,setEbook] = useState([]);
    const [ispdfView ,handleCloseModal] = useState(false);
        useEffect(() => {
        // Fetch ebook details
        axios.get(url+`/ebook?key=${key}`)
            .then(response => {
            
                setEbook(response.data);
                console.log("res",response.data);

            })
            .catch(error => {
                console.error('Error fetching ebook details:', error);
            });
    }, [key]);  
    console.log("res1",ebook.pages);

    return (
        <div>
            <Container>
        <BookDetailsContainer 
        image={ebook.imageSrc} 
        title={ebook.title} 
        publisher={ebook.publisherName}
        category={ebook.category}
        description={ebook.description}/>
        {/* <h1>{ebook.title}</h1>
        <h3>{ebook.publisherName}</h3>
        <h3>{ebook.category}</h3>
        <Cards  key ={1} image={ebook.imageSrc}/>
<<<<<<< Updated upstream
        <button onClick={handleCloseModal}></button>
        { ispdfView &&
            <Container>
            <Row>
              <Col>
              <Modal show={true} onHide={()=> handleCloseModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  {   <div>
            {ebook.pages.map((page, index) => (
                <div key={index} className="page">
                    {page.items.map((item, itemIndex) => (
                        <span key={itemIndex}>{item.str}</span>
                    ))}
                </div>
            ))}
        </div>}
                  </Modal.Body>
                  <Modal.Footer>
                    <MyButton myval="Close" onClick={()=> handleCloseModal(false)} />
                    {/* <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button> */}
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Container>
}
          </div>
        
=======
        <div>
       
        </div> */}
        </Container>
        </div>
>>>>>>> Stashed changes
    ); 
};

export default EBookDetails;
