import "bootstrap/dist/css/bootstrap.css";
import './MyCSS/Card.css'
import { useNavigate } from 'react-router-dom';


const Cards = ({ cardkey, image }) => {
    const navigate = useNavigate();
    const handleEbook = () =>{
        console.log("key",cardkey);
        navigate(`/ebook/${cardkey}`);
        
    }
    return (
        <div id={cardkey} onDoubleClick={handleEbook} className="card my-3 my-md-4 mx-4">
            <img  src={image} className="card-img" alt="Card image" />
        </div>
    );
};

export default Cards;
