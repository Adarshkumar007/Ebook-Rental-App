import BookDetailsLeft from "./BookDetailsLeft";
import BookDetailsRight from "./BookDetailsRight";
import './MyCSS/BookDetailsContainer.css'

const BookDetailsContainer=({image,title,publisher,category,description,onClick})=>{
    return(
        <div className="invidual-book-details"style={{display:"flex",margin:"20px",gap:"10px"}}>
            <BookDetailsLeft image={image}/>
            <BookDetailsRight title={title} description={description} publisher={publisher} category={category} onClick={onClick}/>

        </div>
    )
}
export  default BookDetailsContainer;