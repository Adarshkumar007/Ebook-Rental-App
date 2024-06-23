import { Container } from "react-bootstrap";
import "../MyCSS/ReadBook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import PdfViewer from "../PdfViewer";
const ReadBook = () => {
  const { key } = useParams();
console.log("key",key);
const [file,setFile]=useState("");
const [title,setTitle]=useState("");

useEffect(()=>{
    const fetchData=async ()=>{
      const response = await axios.get(url + "/getfile", {
        params: {
          key: key
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      
      setFile(response.data.pages);
      setTitle(response.data.title);

      console.log("pages",response.data);
    }
    fetchData();
},[])
  return (
    <Container>
      <div className="ReadBook">
        <div className="BookTitle">{title}</div>
        {file!==""&&<PdfViewer pdfUrl={file} />}
      </div>
    </Container>
  );
};
export default ReadBook;
