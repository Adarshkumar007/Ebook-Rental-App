import { useEffect } from "react";
import { FaStar } from "react-icons/fa6";
const ReviewCalculation=({avgRating ,totalRating})=>{
    useEffect(()=>{
        console.log("rat1",avgRating,totalRating);
    },[avgRating ,totalRating]);
    return(
        <div style={{display:"flex",gap:"5px"}}>
            <div className="Average-rating">
                <span style={{color:"#fff"}}>{avgRating}</span>
                <FaStar style={{color:"#fff"}}/>
            </div>
            <div style={{display:"flex",gap:"2px",color:"rgba(0, 13, 66, 0.67)",fontWeight:"bold"}}>
                <span>{totalRating} Ratings &nbsp;</span>
                {/* <span>& </span>
                <span>&nbsp; 72 Reviews</span> */}
            </div>

        </div>
    )
}
export default ReviewCalculation;