import { useEffect, useState } from "react";
import OrderDetails from "./OrderDetails";
import axios from "axios";
import { url } from "../../../url";
import LoadingSpinner from "../LoadingSpinner";

const SingleOrderDetails = ({ order }) => {
  const [bookinfo, setBookInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        const bookId = order.book;
        const response = await axios.get(url + `/ebook?key=${bookId}`);
        setBookInfo(response.data);
        console.log(response.data, "sdfsdf");
        setLoading(false);
      } catch (error) {
        console.error(
          "Error fetching book info:",
          error.response ? error.response.data : error.message
        );
      }
    };

    if (order.book) {
      fetchBookInfo();
    }
  }, []);
  return (
    <div className="Order-Contaier">
      <div className="Ordered-Book-container">
        <div className="Ordered-Book">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <img
              src={bookinfo.imageSrc}
              alt="book"
              className="Ordered-Book-image"
            />
          )}
        </div>
      </div>

      <div className="OrderDetails-Main-Container">
        <OrderDetails order={order} />
      </div>
    </div>
  );
};
export default SingleOrderDetails;
