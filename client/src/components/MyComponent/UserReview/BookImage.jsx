import '../MyCSS/UserReview.css'
const BookImage=({bookInfo})=>{
    return(
        <img src={bookInfo.imageSrc} className="review-book"/>
    )
}
export default BookImage;