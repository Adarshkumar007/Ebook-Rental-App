import "bootstrap/dist/css/bootstrap.css";
import Expire from "./Expire";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";
import moment from "moment";
import LoadingSpinner from "../LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";

const LibraryCard = ({ book }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isExpired, setIsExpiredParent] = useState(false);

  useEffect(() => {
    const getImage = async () => {
      try {
        const response = await axios.get(url + `/bookimage/${book.book}`);
        setImageSrc(response.data.imageSrc);

        const datetime = book.end_date;
        setDate(moment(datetime).format("YYYY-MM-DD"));
      } catch (error) {
        console.error("Error fetching book image:", error);
      } finally {
        setLoading(false);
      }
    };

    getImage();
  }, [book.book]);

  const navigate = useNavigate();

  const handleRead = () => {
    navigate(`/read/${book.book}`);
  };

  return (
    <div className="card cart-card">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img src={imageSrc} className="card-img-top" alt="Book cover" />
          <div className="card-body">
            <div className="expire">
              <Expire end_date={date} setIsExpiredParent={setIsExpiredParent}/>
            </div>
            {!isExpired&&<Link to={`/read/${book.book}`} className="details btn btn-primary">
              Read
            </Link>
}
          </div>
        </>
      )}
    </div>
  );
};

export default LibraryCard;
