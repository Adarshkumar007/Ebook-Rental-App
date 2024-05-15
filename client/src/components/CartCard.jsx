import "bootstrap/dist/css/bootstrap.css";


const CartCard = ({book}) => {

  return (
    <div className="card cart-card">
      <img src={book} className="card-img-top" alt="..." />
      <div className="card-body">
        <a href="#" className="details btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default CartCard;
