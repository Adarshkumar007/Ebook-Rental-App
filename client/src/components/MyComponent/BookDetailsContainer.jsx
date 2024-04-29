import BookDetailsLeft from "./BookDetailsLeft";
import BookDetailsRight from "./BookDetailsRight";
import './MyCSS/BookDetailsContainer.css'
import MyReview from "./ReviewComponents/MyReview";
import AllReview from "./ReviewComponents/AllReview";

const BookDetailsContainer=({ bookId,image,title,publisher,category,description,onClick})=>{
    return(
        <>
        <div className="invidual-book-details"style={{display:"flex",margin:"20px",gap:"10px"}}>
            <BookDetailsLeft image={image}/>
            <BookDetailsRight  bookId={bookId} title={title} description={description} publisher={publisher} category={category} onClick={onClick}/>

        </div>
        <div className="reviews" style={{display:"flex",margin:"20px",gap:"10px"}}>
            <MyReview bookId={bookId}/>
            <AllReview/>
           
        </div>
        </>
    )
}
export  default BookDetailsContainer;