import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../url";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MyButton from "./MyComponent/MyButton";
import { setUserTypeAction } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import BookDetailsContainer from "./MyComponent/BookDetailsContainer";
import PdfViewer from "./MyComponent/PdfViewer";
import SellerBookDetailsContainer from "./MyComponent/SellerBookDetailsContainer";

const Collection =() =>{
    const [books, setBooks] = useState([]);
    const [error,setError]=useState("");
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const [ispdfView, handleCloseModal] = useState(false);
    dispatch(setUserTypeAction("seller"));
    const isSellerAuthenticated = useSelector(
        (state) => state.sellerauth.isAuthenticated
      );
    useEffect(() => {
        if(!isSellerAuthenticated){
            navigate('/seller');
        }else{
          console.log("coll");
        axios.get(url+'/collection', {
            params: {
                userType: "seller"
              },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("sellertoken")}`, // Assuming the token is stored in local storage
          },
        })
        .then((response) => {
          setBooks(response.data.books);
          console.log("xc", response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
          setError(error.response.data.message);
        });
    }
  }, []);
  console.log(books);
  return (
   
    <Container>
      <h1>{error}</h1>
      <SellerBookDetailsContainer
        books={books}
        onClick={() => handleCloseModal(true)}
      />
       <SellerBookDetailsContainer
        books={books}
        onClick={() => handleCloseModal(true)}
      />
    </Container>
    // <div>
    //     {books.map(ebook => (
    //         <Container>
    //         <BookDetailsContainer
    //           image={ebook.imageSrc}
    //           title={ebook.title}
    //           publisher={ebook.publisherName}
    //           category={ebook.category}
    //           description={ebook.description}
    //           onClick={()=>handleCloseModal(true)}
    //         />

    // { ispdfView &&
    //             <Container>
    //             <Row>
    //               <Col>
    //               <Modal show={true} onHide={() => handleCloseModal(false)} >
    //                   <Modal.Header closeButton>
    //                     <Modal.Title>Preview</Modal.Title>
    //                   </Modal.Header>
    //                   <Modal.Body>
    //                   <PdfViewer pdfUrl={ebook.preFileSrc} ></PdfViewer>
    //                   </Modal.Body>
    //                   <Modal.Footer>
    //                     <MyButton myval="Close" onClick={()=> handleCloseModal(false)} />
    //                      {/* <Button variant="secondary" onClick={handleCloseModal}>
    //                       Close
    //                     </Button>  */}
    //                   </Modal.Footer>
    //                 </Modal>

    //               </Col>
    //             </Row>
    //           </Container>
    // }

    //         </Container>
    //     ))}
    // </div>
  );
};
export default Collection;
