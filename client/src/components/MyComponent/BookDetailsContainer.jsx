import BookDetailsLeft from "./BookDetailsLeft";
import BookDetailsRight from "./BookDetailsRight";
import './MyCSS/BookDetailsContainer.css'

const BookDetailsContainer=({image,title,publisher,category,description,onclick})=>{
    return(
        <div className="invidual-book-details"style={{display:"flex",margin:"20px",gap:"10px"}}>
            <BookDetailsLeft image={image}/>
            <BookDetailsRight title={title} description={description} publisher={publisher} category={category} onclick={onclick}/>

        </div>
    )
}
export  default BookDetailsContainer;