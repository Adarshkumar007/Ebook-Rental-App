import "bootstrap/dist/css/bootstrap.css";
import './MyCSS/Card.css'

const Cards = ({ key, image }) => {
    return (
        <div className="card my-3 my-md-4 mx-4">
            <img id={key} src={image} className="card-img" alt="Card image" />
        </div>
    );
};

export default Cards;
