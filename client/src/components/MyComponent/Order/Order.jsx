import { Container } from "react-bootstrap";
import SingleOrderDetails from "./SingleOrderDetails";
import "./Order.css";
import { useEffect, useState } from "react";
import { url } from "../../../url";
import axios from "axios";
import Loading from "../Loading";
import EmptyComponent from "../EmptyComponent";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
       
      }
    };
    fetchOrders();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : orders.length === 0 ? (
        <div style={{margin:"auto"}}>
          <EmptyComponent message="Your have no orders yet" />
        </div>
      ) : (
        orders &&
        orders.map((order) => (
          <SingleOrderDetails key={order.orderId} order={order} />
        ))
      )}
    </Container>
  );
};

export default Order;
