import { Order } from "../models/orders.js";

export const orderDetails = async(req,res) =>{
    const userId = req.user.userId;
    console.log("sdsorfer");
    try {
     const orders = await Order.find({ user: userId});
    res.status(200).json(orders);
        
    } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
        
    }
}