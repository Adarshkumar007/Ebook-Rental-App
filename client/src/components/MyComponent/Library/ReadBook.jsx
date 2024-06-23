import { Container } from "react-bootstrap";
import "../MyCSS/ReadBook.css";
import { useParams } from "react-router-dom";
const ReadBook = () => {
  const { key } = useParams();
console.log("key",key);
  return (
    <Container>
      <div className="ReadBook">
        <div className="BookTitle">The Book Title</div>

      </div>
    </Container>
  );
};
export default ReadBook;
