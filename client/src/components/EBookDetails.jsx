import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "./MyComponent/MyButton";
import {url} from '../url';
import BookDetailsContainer from "./MyComponent/BookDetailsContainer";
import PdfViewer from "./MyComponent/PdfViewer";
import './MyComponent/MyCSS/EBookDetails.css'

const EBookDetails = () => {
  const { key } = useParams();
  const [ebook, setEbook] = useState([]);
  const [ispdfView, handleCloseModal] = useState(false);
  
  
  useEffect(() => {
    // Fetch ebook details
   
    axios
      .get(url + `/ebook?key=${key}`)
      .then((response) => {
        setEbook(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching ebook details:", error);
      });
  }, [key]);

  return (
    <div>
      <Container>
      
        <BookDetailsContainer
          bookId={ebook.id}
          image={ebook.imageSrc}
          title={ebook.title}
          publisher={ebook.publisherName}
          category={ebook.category}
          description={ebook.description}
          onClick={()=>handleCloseModal(true)} 
        />
      

{ ispdfView &&
            <Container>
            <Row>
              <Col>
              <Modal show={true} onHide={() => handleCloseModal(false)} className="custom-modal">
                  <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <PdfViewer pdfUrl={ebook.pages} ></PdfViewer>
                  </Modal.Body>
                  <Modal.Footer>
                    <MyButton myval="Close" onClick={()=> handleCloseModal(false)} />
                     {/* <Button variant="secondary" onClick={handleCloseModal}>
                      Close
                    </Button>  */}
                  </Modal.Footer>
                </Modal> 
                 
    
        
        
              </Col>
            </Row>
          </Container>
}
        

        </Container>
        
</div>
  );
};


export default EBookDetails;
