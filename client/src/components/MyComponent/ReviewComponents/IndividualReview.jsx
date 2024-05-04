import AllReviewProfile from "./AllReviewProfile";
import AllReviewComment from "./AllReviewComment";

const comment =
  "Your insights on this topic are truly enlightening. I'm amazed by the depth of your understanding and the clarity with which you explain complex concepts. Reading your analysis has given me a fresh perspective and has inspired me to delve deeper into the subject matter. Your expertise shines through in every word, and I can't thank you enough for sharing your knowledge with the community. Keep up the fantastic work!";

const IndividualReview = ({review}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
      }}
    >
      <AllReviewProfile review={review} />
      <AllReviewComment comment={review.review} />
    </div>
  );
};

export default IndividualReview;
