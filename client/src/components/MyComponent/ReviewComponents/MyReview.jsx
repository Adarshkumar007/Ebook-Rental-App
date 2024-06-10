import { useEffect, useState } from "react";
import MyReviewStar from "./MyReviewStar";
import axios from "axios";
import ReviewDetails from "./ReviewDetails";
import "../MyCSS/MyReview.css";
import SuccessButton from "../SuccessButton";
import { useDispatch, useSelector } from "react-redux";
import ProfileImage from "../ProfileImage";
import { url } from "../../../url";
import { logout, setActiveModal } from "../../../redux/actions/authActions";


const MyReview = ({ bookId }) => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState("");
  const [hover, setHover] = useState(null);
  const username = useSelector((state) => state.auth.username);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleRatingChange = (currentRating) => {
    setRating(currentRating);
  };
  const handleHoverChange = (currentRating) => {
    setHover(currentRating);
  };
  const handleSetFile = () => {};

  useEffect(() => {
    if (bookId) {
      axios
        .get(url + `/issubscribed?bookId=${bookId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // setEbook(response.data);
          setIsSubscribed(response.data.subscribed);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            if (error.response.status === 403) {
              console.error("Error 403: Forbidden");
              dispatch(logout("user"));
              dispatch(setActiveModal("login", "user"));
            } else {
              console.error(
                `Error ${error.response.status}: ${error.response.statusText}`
              );
              // Handle other errors
            }
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error", error.message);
          }
        });
    }
  }, [isAuthenticated, bookId]);
  const handleOnClick = async () => {
    if (isAuthenticated) {
      if (isSubscribed) {
        if (!rating) {
          console.log("invalid rating");
        } else {
          try {
            const res = await axios.post(
              url + "/rating",
              {
                rating: rating,
                review: review,
                bookId: bookId,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            );
            dispatch(setActiveModal("myreview", "user"));
            console.log("update", res.data.message);
            setRating(null);
            setHover(null);
            setReview("");
          } catch (err) {}
        }
      } else {
        console.log("Subscription required");
        dispatch(setActiveModal("subscriberequired","user"));
        setRating(null);
        setHover(null);
        setReview("");
      }
    } else {
      dispatch(setActiveModal("login", "user"));
    }
  };
  return (
    <div className="MyReview-Container">
      <div className="Pic-Name">
        <ProfileImage
          image={useSelector((state) => state.auth.imageSrc)}
          handleSetFile={handleSetFile}
        />
        <div className="Name-Rating">
          <h4>
            <span>Hello, </span>
            <span>{username}</span>
          </h4>
          <MyReviewStar
            rating={rating}
            hover={hover}
            onRatingChange={handleRatingChange}
            onHoverChange={handleHoverChange}
          />
        </div>
      </div>

      <div className="write-Review">
        <textarea
          className="MyReview-content"
          placeholder="Write your review..."
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
      <SuccessButton myval={"Submit"} onClick={handleOnClick} />

      <ReviewDetails bookId={bookId} />
    </div>
  );
};

export default MyReview;
