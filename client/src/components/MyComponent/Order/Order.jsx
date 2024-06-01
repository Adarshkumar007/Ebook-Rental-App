import { Container } from "react-bootstrap";
import SingleOrderDetails from "./SingleOrderDetails";
import './Order.css';
import { useEffect, useState } from "react";
import { url } from "../../../url";
import axios from "axios";

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(url + "/api/orders", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                if (response.data) {
                    setOrders(response.data);
                } else {
                    console.error("No bookIds found in the response data");
                }
            } catch (error) {
                console.error(
                    "Error fetching orders:",
                    error.response ? error.response.data : error.message
                );
            }
        };
        fetchOrders();
    }, []);

    return (
        <Container>
            {orders && orders.map((order) => (
                <SingleOrderDetails key={order.orderId} order={order} />
            ))}
        </Container>
    );
}

export default Order;
