import { Container } from "react-bootstrap";
import MyReviewContainer from "./MyComponent/UserReview/MyReviewContainer";

const Reviews = () => {
  return (
    <Container>
      <div style={{display:"flex",flejustifyContent:"center",flexWrap:"wrap" }}>
        {[...Array(10)].map((_,index)=>{return(<MyReviewContainer key={index} />)})}
      </div>
    </Container>
  );
};

export default Reviews;
