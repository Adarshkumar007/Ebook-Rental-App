import "bootstrap/dist/css/bootstrap.css";
import { IoRemoveCircle } from "react-icons/io5";


const CartCard = ({book}) => {

  return (
    <div className="card cart-card">
      <img src={book} className="card-img-top" alt="..." />
      <div className="card-body">
      <IoRemoveCircle className="removeBook" size={25}/>
        <a href="#" className="details btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CartCard;
