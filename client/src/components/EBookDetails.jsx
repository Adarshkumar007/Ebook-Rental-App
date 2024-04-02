import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "./MyComponent/MyButton";
import {url} from '../url';
import BookDetailsContainer from "./MyComponent/BookDetailsContainer";

const EBookDetails = () => {
    const { key } = useParams();
    const [ebook ,setEbook] = useState([]);
    const [ispdfView ,handleCloseModal] = useState(false);
    console.log("url",url);
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
        
        
        </Container>
        </div>
    ); 
};

export default EBookDetails;
