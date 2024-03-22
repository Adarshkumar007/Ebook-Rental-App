import "bootstrap/dist/css/bootstrap.css";
import './MyCSS/Card.css'

const Cards = ({ image }) => {
    return (
        <div className="card my-3 my-md-4 mx-4">
            <img src={image} className="card-img" alt="Card image" />
        </div>
    );
};

export default Cards;
