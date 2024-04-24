import '../MyComponent/MyCSS/SellerBookCard.css'
import SellerBookLeft from './SellerBookLeft';
import SellerBookDetailsRight from './SellerBookDetailsRight';

const SellerBookCard=({ id , image,title,publisher,category,description,onClick})=>{
    return(
        <div className="SellerCard">
            <SellerBookLeft image={image}/>
            <SellerBookDetailsRight title={title} category={category} id={id}  publisher={publisher} description={description} onClick={onClick}/>
        </div>
    )
}

export default SellerBookCard;