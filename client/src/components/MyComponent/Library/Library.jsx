import '../MyCSS/Cart.css'
import CartEmpty from '../../CartEmpty'
import LibraryCard from './LibraryCard'
import { Container } from 'react-bootstrap'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import { url } from '../../../url'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveModal } from '../../../redux/actions/authActions'
const Library = () =>{
  var flag=0;
  const [books ,setBooks]=useState([]);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const fetchBookIds = async () => {
  try {
    const response = await axios.get(url+'/api/subscriptionbooksIDs', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    setBooks(response.data);
  } catch (error) {
    console.error('Error fetching book IDs:', error);
  }
}
 if (isAuthenticated ) {
  if(flag===0){
    flag=1;
    fetchBookIds();
  }
} else {
  dispatch(setActiveModal("login", "user"));
}
}, [isAuthenticated]);


 return(
    <Container>
    {books.length===0 && <CartEmpty/>}
      <div className="cart-container">
        {books.map((book,index)=><LibraryCard key={index} book={book}/>)}
      </div>
      </Container>
 )
}

export default Library;