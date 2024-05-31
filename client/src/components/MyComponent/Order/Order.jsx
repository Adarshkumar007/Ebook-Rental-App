import { Container } from "react-bootstrap"
import SingleOrderDetails from "./SingleOrderDetails";
import './Order.css'

import img1 from '../../images/image1.jpg'


const MyOrder=[
    {
        image:img1,
        name:"The Way life",
        orderId:"6656c7bc0c6d951645f2c3b2",
        amount:450,
        orderDate:'29/05/2024',
        ExpireDate:'29/07/2024',
    },
    {
        image:img1,
        name:"The Way life",
        orderId:"6656c7bc0c6d951645f2c3b2",
        amount:450,
        orderDate:'29/05/2024',
        ExpireDate:'29/07/2024',
    },
    {
        image:img1,
        name:"The Way life",
        orderId:"6656c7bc0c6d951645f2c3b2",
        amount:450,
        orderDate:'29/05/2024',
        ExpireDate:'29/07/2024',
    },
    {
        image:img1,
        name:"The Way life",
        orderId:"6656c7bc0c6d951645f2c3b2",
        amount:450,
        orderDate:'29/05/2024',
        ExpireDate:'29/07/2024',
    },

]

const Order=()=>{
    return(
        <Container>
            {MyOrder.map((myorder)=><SingleOrderDetails key={myorder.orderId} myorder={myorder}/>)}
            
        </Container>
    )
}

export default Order;