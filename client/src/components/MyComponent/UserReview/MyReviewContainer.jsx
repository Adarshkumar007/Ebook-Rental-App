import BookImage from "./BookImage";
import BookNameStar from "./BookNameStar";
import MyComment from "./MyComment";
import LikeDislikeOptions from "./LikeDisLikeOptions";
import img from '../../images/built.jpg'; 
import '../MyCSS/UserReview.css';
 var comment="Wow, this article truly opened my eyes to a new perspective on the topic! The author's insights are incredibly valuable, and their ability to articulate complex ideas in such a clear and concise manner is impressive. I found myself nodding along with every point made, and I've gained a deeper understanding of the subject thanks to their expertise. This is exactly the kind of thoughtful analysis I was looking for, and I can't wait to share it with others. Thank you for such an insightful piece!"
const MyReviewContainer = () => {
  return (
    <div className="MyReviewContainer">
      <BookImage image={img} /> 
      <div className="Name-rating-review-share-options">
        <BookNameStar/>
        <MyComment comment={comment} />
        <LikeDislikeOptions/>
      </div>
    </div>
  );
};

export default MyReviewContainer;
