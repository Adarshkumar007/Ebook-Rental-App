import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch user's past orders from the backend API
    axios.get('http://localhost:5000/orders', {
      
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in local storage
      }
    })
    .then(response => {
      setOrders(response.data.orders);
    })
    .catch(error => {
      console.error('Error fetching past orders:', error);
    });
  }, []);

  return (
    <div>
      <h2>Past Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Order ID: {order._id}</p>
            <p>Total: ${order.total}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
