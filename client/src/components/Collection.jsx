import { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import axios from 'axios';
import {url } from '../url'
import { setUserTypeAction } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import BookDetailsLeft from "./MyComponent/BookDetailsLeft";

const Collection =() =>{
    const [books, setBooks] = useState([]);
    const dispatch=useDispatch();
    const navigate = useNavigate();

    dispatch(setUserTypeAction("seller"));
    const isSellerAuthenticated = useSelector(
        (state) => state.sellerauth.isAuthenticated
      );
    useEffect(() => {
        if(!isSellerAuthenticated){
            navigate('/seller');
        }else{
        axios.get(url+'/collection', {
            params: {
                userType: "seller"
              },
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('sellertoken')}` // Assuming the token is stored in local storage
          }
        })
        .then(response =>{ 
            setBooks(response.data.books);
            console.log("xc",response.data);
        })
        .catch(error =>{ 
          console.error('Error fetching profile:', error);
          
          }
        );
      }}, []);
      return (
        <div>
            {books.map(book => (
                <div key={book._id}>
                <h1 >{book.title}</h1>
                <BookDetailsLeft image={book.imageSrc}/>
                </div>
            ))}
        </div>
    );
}
export default Collection;