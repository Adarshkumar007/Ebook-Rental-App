import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "./MyComponent/MyButton";
import { url } from "../url";
import BookDetailsContainer from "./MyComponent/BookDetailsContainer";
import PdfViewer from "./MyComponent/PdfViewer";
import "./MyComponent/MyCSS/EBookDetails.css";
import Loading from "./MyComponent/Loading";

const EBookDetails = () => {
  const { key } = useParams();
  const [ebook, setEbook] = useState({});
  const [ispdfView, setIspdfView] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch ebook details
    axios
      .get(url + `/ebook?key=${key}`)
      .then((response) => {
        setEbook(response.data);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching ebook details:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [key]);

  return (
    <div>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <>
            <BookDetailsContainer
              bookId={ebook.id}
              image={ebook.imageSrc}
              title={ebook.title}
              publisher={ebook.publisherName}
              category={ebook.category}
              description={ebook.description}
              onClick={() => setIspdfView(true)}
            />

            {ispdfView && (
              <Container>
                <Row>
                  <Col>
                    <Modal
                      show={true}
                      onHide={() => setIspdfView(false)}
                      className="custom-modal bookPreview"
                    >
                      <Modal.Header closeButton className="bookPreviewHeader">
                        <Modal.Title>Preview</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <PdfViewer pdfUrl={ebook.pages} />
                      </Modal.Body>
                      <Modal.Footer>
                        <MyButton
                          myval="Close"
                          onClick={() => setIspdfView(false)}
                        />
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Container>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default EBookDetails;
