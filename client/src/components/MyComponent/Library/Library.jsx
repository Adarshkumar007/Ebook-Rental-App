import '../MyCSS/Cart.css'
import img1 from '../../images/built.jpg'
import img2 from '../../images/image1.jpg'
import img3 from '../../images/image2.jpg'
import img4 from '../../images/image3.jpg'
import img5 from '../../images/image4.jpg'
import img6 from '../../images/image5.jpg'
import CartEmpty from '../../CartEmpty'
import LibraryCard from './LibraryCard'
import { Container } from 'react-bootstrap'
const books=[
img1,img2,img3,img4,img5,img6
];


const Library=()=>{
 return(
    <Container>
    {books.length===0 && <CartEmpty/>}
      <div className="cart-container">
        {books.map((book,index)=><LibraryCard key={index} book={book} />)}
        
      </div>
      </Container>
 )
}

export default Library;