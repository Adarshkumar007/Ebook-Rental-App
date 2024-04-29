import { FaStar } from "react-icons/fa";

const AllReviewStar = ({ rate }) => {
  return (
    <div>
      {[...Array(rate)].map((_, index) => (
        <FaStar key={index} size={15} style={{color:"#ffc107"}}/>
      ))}
    </div>
  );
};

export default AllReviewStar;
