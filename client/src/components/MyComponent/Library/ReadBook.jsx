import { Container } from "react-bootstrap";
import "../MyCSS/ReadBook.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import PdfViewer from "../PdfViewer";
import Loading from "../Loading";
const ReadBook = () => {
  const { key } = useParams();
  console.log("key", key);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      const response = await axios.get(url + "/getfile", {
        params: {
          key: key,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFile(response.data.pages);
      setTitle(response.data.title);
      setLoad(false);

      console.log("pages", response.data);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <div className="ReadBook">
        <div className="BookTitle">{title}</div>
        {load ? (
        <Loading />
      ) : (
        <div>{file !== "" && <PdfViewer pdfUrl={file} />}</div>
      )}
      </div>
      
    </Container>
  );
};
export default ReadBook;
