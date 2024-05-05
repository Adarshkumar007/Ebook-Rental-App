import '../MyCSS/ReviewModalContent.css'
import '../MyCSS/MyReview.css'
import ReviewModalContentLeft from './ReviewModalContentLeft'
import ReviewModalContentRight from './ReviewModalContentRight'
const ReviewModalContent=()=>{
    return(
     <div className="SellerBookReview">
        <ReviewModalContentLeft/>
        <ReviewModalContentRight/>
     </div>
    )
}
export default ReviewModalContent;