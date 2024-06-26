import BookImage from "./BookImage";
import BookNameStar from "./BookNameStar";
import MyComment from "./MyComment";
import LikeDislikeOptions from "./LikeDisLikeOptions";
import img from "../../images/built.jpg";
import "../MyCSS/UserReview.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../url";


const MyReviewContainer = ({ review }) => {
  const [bookInfo, setBookInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${url}/bookinfo?bookId=${review.bookId}`)
      .then((response) => {
        setBookInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  });
  return (
    <div className="MyReviewContainer">
      <BookImage bookInfo={bookInfo} loading={loading}/>
      <div className="Name-rating-review-share-options">
        <BookNameStar bookInfo={bookInfo} review={review} />
        <MyComment comment={review.review} />
        <LikeDislikeOptions review={review}/>
      </div>
    </div>
  );
};

export default MyReviewContainer;
