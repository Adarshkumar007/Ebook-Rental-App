import { FaStar } from "react-icons/fa6";
const ReviewCalculation=()=>{
    return(
        <div style={{display:"flex",gap:"5px"}}>
            <div className="Average-rating">
                <span style={{color:"#fff"}}>4.5</span>
                <FaStar style={{color:"#fff"}}/>
            </div>
            <div style={{display:"flex",gap:"2px",color:"rgba(0, 13, 66, 0.67)",fontWeight:"bold"}}>
                <span>338 Ratings &nbsp;</span>
                <span>& </span>
                <span>&nbsp; 72 Reviews</span>
            </div>

        </div>
    )
}
export default ReviewCalculation;