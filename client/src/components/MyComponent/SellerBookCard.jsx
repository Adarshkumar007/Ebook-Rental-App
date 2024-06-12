import '../MyComponent/MyCSS/SellerBookCard.css'
import SellerBookLeft from './SellerBookLeft';
import SellerBookDetailsRight from './SellerBookDetailsRight';

const SellerBookCard=({ id , image,title,publisher,category,description,onClick,plan})=>{
    return(
        <div className="SellerCard">
            <SellerBookLeft image={image}/>
            <SellerBookDetailsRight title={title} category={category} id={id}  publisher={publisher} plan={plan} description={description} onClick={onClick}/>
        </div>
    )
}

export default SellerBookCard;