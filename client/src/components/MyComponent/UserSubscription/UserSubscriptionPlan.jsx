import '../MyCSS/UserSubscriptionPlan.css';
import image from "../../images/built.jpg";
import Plan from './Plan';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../../../url';


const UserSubscriptionPlan = () => {
    const plans = [
        { month: 1, price: 30.00 },
        { month: 2, price: 50.00 },
        { month: 3, price: 70.00 },
        { month: 6, price: 150.00 },
        { month: 12, price: 250.00 }
    ];

    const [ebook, setEbook] = useState({});
    const bookId = useSelector((state) => state.currentBookID.currentBookID);

    useEffect(() => {
        // Fetch ebook details
        console.log(bookId);
        axios.get(url + `/ebooksub?bookId=${bookId}`)
            .then((response) => {
                setEbook(response.data);
            })
            .catch((error) => {
                console.error("Error fetching ebook details:", error);
            });
    }, [bookId]);

    const handlesubscribe = async (plan) => {
        try {
            console.log("price", plan.price);
            const result = await axios.post(
                `${url}/subscribe`,
                { plan: plan, bookId: bookId },
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            );
                        console.log("result", result);
            const { id: order_id, amount, currency } = result.data;
        // console.log("con",process.env.REACT_APP_KEY==='rzp_test_ex1uwscMpGjh5L',process.env.REACT_APP_KEY,typeof('rzp_test_ex1uwscMpGjh5L'));
        const options = {
            key: process.env.REACT_APP_KEY,
            amount,
            currency,
            order_id,
            name: 'RentReader',
            description: 'Test Transaction',
            handler: function (response) {
                axios.post(url+'/api/payment-success', {
                    order_id: response.razorpay_order_id
                }).then(() => {
                    console.log("Success.");
                }).catch(error => {
                    console.error("Error verifying payment:", error);
                });
            },
            prefill: {
                name: localStorage.getItem('username'),
                email: 'john.doe@example.com',
                contact: '9999999999'
            },
            notes: {
                address: 'Some Address'
            },
            theme: {
                color: '#F37254'
            },
            modal: {
                ondismiss: function () {
                    alert('Payment was not completed. Please try again.');
                    // Add logic to handle payment failure here
                }
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        } catch (error) {
            console.error("Subscription error:", error);
        }
    };

    return (
        <div className='UserSubscriptionPlan'>
            <div className='book-title'>
                <img src={ebook.imageSrc || image} alt={ebook.title || 'Book Image'} className='bookImage' />
                <h5>{ebook.title}</h5>
            </div>
            <div className='Plan-list'>
                {plans.map((plan, index) => (
                    <Plan key={index} plan={plan} onClick={() => handlesubscribe(plan)} />
                ))}
            </div>
        </div>
    );
}

export default UserSubscriptionPlan;
