import '../MyCSS/Cart.css';
import LibraryCard from './LibraryCard';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../../url';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal } from '../../../redux/actions/authActions';
import Loading from '../Loading';
import EmptyComponent from '../EmptyComponent';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const fetchBookIds = async () => {
      try {
        const response = await axios.get(url + '/api/subscriptionbooksIDs', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching book IDs:', error);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchBookIds();
    } else {
      dispatch(setActiveModal('login', 'user'));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <Container>
      {loading ? (
        <div><Loading/></div>
      ) : books.length === 0 ? (
        <EmptyComponent message="You Havenot Subscribed To Any Book" />
      ) : (
        <div className="cart-container">
          {books.map((book, index) => (
            <LibraryCard key={index} book={book} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Library;
