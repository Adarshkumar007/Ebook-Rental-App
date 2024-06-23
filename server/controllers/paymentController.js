import Razorpay from 'razorpay';  
import crypto from 'crypto';
import  { nanoid } from 'nanoid';
import { eBook } from '../models/ebook.js';
import {User} from '../models/User.js'
import { Order } from '../models/orders.js';
import { Subscription } from '../models/subscription.js';
import dotenv from 'dotenv';
import axios from 'axios';
import { Seller } from '../models/Seller.js';
import { AccountDetailsModel } from '../models/acoount.js';
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
    const newEndDate = new Date(endDate.toISOString().split('T')[0]);
    const seller = await eBook.findById(orderInfo.book).select('publisherId');
    console.log("seller id",seller);
    const subInfo = {
        order: orderInfo._id,
        user: orderInfo.user,
        seller:seller.publisherId,
        book: orderInfo.book,
        plan: orderInfo.plan,
        amount: orderInfo.amount,
        end_date: newEndDate    
    };
   
    const subscription = new Subscription(subInfo);
    const response = await subscription.save();

    res.status(200).json(response);
    } catch (error) {
    res.status(500).json();
        console.log(error);
    }
    
};

export const setAccountInfo = async (req, res) => {
    const publisherId = req.user.userId;
    const formValues = { ...req.body, publisherId };
  
    try {
      // Fetch seller information
      const seller = await Seller.findOne({ _id: publisherId }).select('email username');
     

      if (!seller) {
        return res.status(404).json({ message: 'Seller not found' });
      }
      const authString = Buffer.from(`${razorpay.key_id}:${razorpay.key_secret}`).toString('base64');
      // Log seller information (for debugging)
      console.log("Email:", seller.email);
      console.log("Username:", seller.username);
      console.log("Form values:", formValues.name);
      const contactData = {
        name: seller.username,
        email: seller.email,
        contact: formValues.phone,
        type: 'customer',
        reference_id: '12345',
        notes: {
          notes_key_1: 'Some notes here',
          notes_key_2: 'More notes here',
        },
      };
      // Create Razorpay contact
      const contactResponse = await axios.post('https://api.razorpay.com/v1/contacts', contactData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${authString}`,
        },
      });
      console.log('Contact created:', contactResponse.data);
  
      // Step 2: Create fund account
      const fundAccountResponse = await razorpay.fundAccount.create({
        contact_id: contactResponse.data.id,
        account_type: "bank_account",
        bank_account: {
            account_number: formValues.accountnumber,
            ifsc: formValues.ifsc,
            name: formValues.name,
            // Add other bank account details as required by Razorpay API
          },
      });
      console.log("Fund Account Response:", fundAccountResponse);
  
      // Step 3: Update or insert AccountDetailsModel
      const updatedValues = {
        ...formValues,
        fundAccount: fundAccountResponse.id,
      };
  
      const result = await AccountDetailsModel.findOneAndUpdate(
        { publisherId: publisherId }, // Filter
        updatedValues, // Update
        { new: true, upsert: true, setDefaultsOnInsert: true } // Options
      );
  
      res.status(200).json({ message: 'Information Saved Successfully', data: result });
    } catch (error) {
      console.error('Error creating contact or fund account:', error);
      res.status(500).json({ message: 'Error processing request', error });
    }
  
  };