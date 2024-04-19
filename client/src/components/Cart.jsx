import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModal } from '../redux/actions/authActions';
import { url } from '../url';

const Cart = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [bookIds, setBookIds] = useState([]);
    const [bookInfos, setBookInfos] = useState([]);

    useEffect(() => {
        const fetchBookIds = async () => {
            try {
                console.log("ids1");
                const response = await axios.get(url+'/api/getBookIds', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                console.log("ids");
                console.log("ids",response.data.bookIds);
                setBookIds(response.data.bookIds);
            } 
             catch (error) {
                console.error('Error fetching book ids:', error.response ? error.response.data : error.message);
            }
        };

        if (isAuthenticated) {
            fetchBookIds();
        } else {
            dispatch(setActiveModal('login', 'user'));
        }
    }, [dispatch, isAuthenticated]);

    useEffect(() => {
        const fetchBookInfo = async (bookId) => {
            try {
                const response = await axios.get(url + `/ebook?key=${bookId}`); // Assuming you have an endpoint to fetch book info by book id
                setBookInfos((prevBookInfos) => [...prevBookInfos, response.data]);
            } catch (error) {
                console.error('Error fetching book info:', error.response ? error.response.data : error.message);
            }
        };

        if (bookIds.length > 0) {
            bookIds.forEach((bookId) => fetchBookInfo(bookId));
        }
    }, [bookIds]);

    return (
        <div className="cart-container">
            {bookInfos.length > 0 ? (
                bookInfos.map((bookInfo) => (
                    <div key={bookInfo.id}>
                        <h2>{bookInfo.title}</h2>
                        <p>{bookInfo.description}</p>
                        {/* Other book info */}
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Cart;
