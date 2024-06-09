import "../MyCSS/ReviewModalContent.css";
import "../MyCSS/MyReview.css";
import ReviewModalContentLeft from "./ReviewModalContentLeft";
import ReviewModalContentRight from "./ReviewModalContentRight";
import Loading from "../Loading";
import { useState, useEffect } from "react";

const ReviewModalContent = () => {
  const [reviewLoading, setReviewLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);

  useEffect(() => {
    // Adding a timeout just in case the API calls are too fast to ensure we see the Loading component for debugging
    const timeout = setTimeout(() => {
      setReviewLoading(false);
      setCommentLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="SellerBookReview">
      {reviewLoading || commentLoading ? (
        <Loading />
      ) : (
        <>
          <ReviewModalContentLeft setReviewLoading={setReviewLoading} />
          <ReviewModalContentRight setCommentLoading={setCommentLoading} />
        </>
      )}
    </div>
  );
};

export default ReviewModalContent;
