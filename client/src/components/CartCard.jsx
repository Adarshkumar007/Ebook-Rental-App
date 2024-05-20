import "bootstrap/dist/css/bootstrap.css";
import { IoRemoveCircle } from "react-icons/io5";

import axios from "axios";
import { url } from "../url";
const CartCard = ({book,handleCartBooks}) => {
const handleOnClick= () =>{
  window.open(`/ebook/${book.id}`);
}
 
  const handleRemove = () =>{
      axios.get(url+`/removefromcart/${book.id}`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
    handleCartBooks()
    console.log(response.data);
  })
  .catch(error => {
      // Handle error
      console.error(error);
  });
}

  return (
    <div className="card cart-card">
      <img src={book.imageSrc} className="card-img-top" alt="..." />
      <div className="card-body">
      <IoRemoveCircle className="removeBook" size={25} onClick={handleRemove}/>
        <a href="#" className="details btn btn-primary" onClick={handleOnClick}>
          View Details
        </a>
      </div>
    </div>
  );
};

export default CartCard;
