import { Container } from "react-bootstrap";
import MyReviewContainer from "./MyComponent/UserReview/MyReviewContainer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../url";
const Reviews = () => {
  const [reviews,setReviews] = useState([]);
  const isuserAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!isuserAuthenticated){
      navigate('/');
    }
    else{
      axios.get(url+'/reviews', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
    }
  },[])
  return (
    <Container>
      <div style={{display:"flex",flejustifyContent:"center",flexWrap:"wrap" }}>
      {reviews.map(review => (
  <MyReviewContainer key={review._id} review={review} />
))}
      </div>
    </Container>
  );
};

export default Reviews;
