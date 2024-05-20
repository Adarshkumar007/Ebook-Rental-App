import "bootstrap/dist/css/bootstrap.css";
import Expire from "./Expire";

const LibraryCard = ({ book }) => {
  return (
    <div className="card cart-card">
      <img src={book} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="expire">
          <Expire />
        </div>

        <a href="#" className="details btn btn-primary">
          Read
        </a>
      </div>
    </div>
  );
};

export default LibraryCard;
