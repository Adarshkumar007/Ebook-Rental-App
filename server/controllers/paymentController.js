import Razorpay from 'razorpay';  
import crypto from 'crypto';
import  { nanoid } from 'nanoid';
import { eBook } from '../models/ebook.js';
import {User} from '../models/User.js'
import { Order } from '../models/orders.js';
import { Subscription } from '../models/subscription.js';
import dotenv from 'dotenv';
dotenv.config();
const razorpay = new Razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET
});
export const order = async(req,res) =>{
    const { bookId ,plan } = req.body;
    const userId = req.user.userId;

    const book = await eBook.findById(bookId);
    const user = await User.findById(userId);

    if (!book || !user) {
        return res.status(404).send('User or Book not found');
    }

    const payment_capture = 1;
    const amount = plan.price * 100; // Convert to paise
    const currency = 'INR';

    const options = {
        amount,
        currency,
        receipt: nanoid(),
        payment_capture
    };

    try {
        const response = await razorpay.orders.create(options);
        const newOrder = new Order({
            user: user._id,
            book: book._id,
            order_id: response.id,
            amount: response.amount,
            plan:plan.month,
            currency: response.currency,
            receipt: response.receipt,
            status: 'created'
        });
        await newOrder.save();
        res.json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
}

export const verifyPayment = async(req, res) => {
    const secret = process.env.SECRET;
    console.log("verifyed");
    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    if (digest === req.headers['x-razorpay-signature']) {
        console.log('Request is legit');

        const { order_id, payment_id } = req.body.payload.payment.entity;

        try {
            const order = await Order.findOneAndUpdate(
                { order_id: order_id },
                { status: 'paid', payment_id: payment_id },
                { new: true }
            );
            console.log('Order updated:', order);
            res.json({ status: 'ok' });
        } catch (error) {
            console.error('Error updating order:', error);
            res.status(500).send('Internal Server Error');
        }
    } else {
        console.error('Invalid signature');
        res.status(400).send('Invalid signature');
    }

};
export const subscribe = async (req, res) => {
    const { order_id } = req.body;
    console.log(order_id);
    try {
        const orderInfo = await Order.findOne({ order_id: order_id });
    const startDate = new Date();
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + orderInfo.plan, startDate.getDate());

    const subInfo = {
        order: orderInfo._id,
        user: orderInfo.user,
        book: orderInfo.book,
        plan: orderInfo.plan,
        amount: orderInfo.amount,
        end_date: endDate
    };

    const subscription = new Subscription(subInfo);
    const response = await subscription.save();

    res.status(200).json(response);
    } catch (error) {
    res.status(500).json();
        console.log(error);
    }
    
};
