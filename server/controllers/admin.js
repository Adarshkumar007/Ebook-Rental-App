import { Admin } from "../models/admin.js";
import jwt from 'jsonwebtoken';
import Razorpay from 'razorpay';  
import dotenv from 'dotenv';
import { Transfer } from "../models/request.js";
import { Seller } from "../models/Seller.js";
import { Subscription } from "../models/subscription.js";
import mongoose from 'mongoose';
import { AccountDetailsModel } from "../models/acoount.js";
import axios from 'axios';
dotenv.config();
const razorpay = new Razorpay({
    key_id: process.env.KEY,    
    key_secret: process.env.SECRET
});
export const adminlogin = async (req, res) => {
    const { username, password } = req.body;
    console.log("hello admin",username,password);
    // Find admin by username
    const admin = await Admin.find({username:username,password:password});
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    console.log("hello",admin)
    
    const token = jwt.sign({ id: admin.id, username: admin.username }, "SECRET_KEY", { expiresIn: '1h' });
  
    res.json({ token });
}
export const gettransferinfo=async(req,res) =>{
  try {
     const uniquePublishers = await Transfer.aggregate([
      { $match: { status: 'pending' } },
      { $group: {
          _id: "$publisherId",
          doc: { $first: "$$ROOT" }
        }
      },
      { $replaceRoot: { newRoot: "$doc" } }
    ]);
    
    res.status(200).json({uniquePublishers})
  } catch (error) {
    console.log('No publishers with pending status found.');
  }
}
export const getnewseller=async(req,res) =>{
  try {
      const uniquePublishers = await Seller.find({status:"verifing"}).select('_id');
      if(uniquePublishers){
        console.log(uniquePublishers,"ASDsdfsdfsdf");
        // const imageBase64 = Buffer.from(uniquePublishers.profile_image.data).toString('base64');
        // const profile_image = `data:${uniquePublishers.profile_image.contentType};base64,${imageBase64}`;
        // uniquePublishers=[...uniquePublishers,profile_image];
        return res.status(200).json({uniquePublishers});

      }
      else{
        return res.status(200).json({})

      }

  } catch (error) {
    console.log('No publishers with pending status found.',error);
  }
}
export const updateStatus=async(req,res)=>{
  const { Id } = req.body;
  const result = await Seller.updateMany(
    { _id: Id, status: "verifing" },  // Filter condition using _id field
    { $set: { status: "verified" } }  // Update operation
  );
  console.log(result,"result");
  // Check if any documents were updated
  if (result.modifiedCount > 0) {
    return res.status(200).json({result});
  } else {
   return res.status(400).json({message:"error while approving"});
  }
  
   // Output the result of the update operation
  
}
export const updateStatusBlock=async(req,res)=>{
  const { Id,status } = req.body;
  console.log(Id,status);
  const result = await Seller.updateMany(
    { _id: Id },  // Filter condition using _id field
    { $set: { status: status==="block"?"blocked":"verified" } }  // Update operation
  );
  console.log(result,"result");
  // Check if any documents were updated
  if (result.modifiedCount > 0) {
    return res.status(200).json({result});
  } else {
   return res.status(400).json({message:"error while approving"});
  }
  
   // Output the result of the update operation
  
}
export const getSellerInfo=async(req,res)=>{
  try {
    const sellerId = req.query.sellerId;
    console.log("seller id",sellerId);
    const sellerinfo = await Seller.findById(sellerId).select('profile_image username address email phone pin status');
    const imageBase64 = Buffer.from(sellerinfo.profile_image.data).toString('base64');
    const imageSrc = `data:${sellerinfo.profile_image.contentType};base64,${imageBase64}`;
    res.status(200).json({imageSrc:imageSrc,
      name:sellerinfo.username,
      address:sellerinfo.address,email:sellerinfo.email,phone:sellerinfo.phone,pin:sellerinfo.pin,status:sellerinfo.status
    })
  } catch (error) {
    console.log('No publishers with pending status found.');
  }
}

export const cEarningsadmin = async(req,res)=>{
  const publisherId = req.query.userId;
 
  try {
    const result = await Subscription.aggregate([
      // Match documents where the seller matches userId and dispatch is true
      { $match: { seller: new mongoose.Types.ObjectId(publisherId), dispatch: "false" } },
      // Group to calculate the total sum of amount
      {
          $group: {
              _id: null,
              totalSum: { $sum: '$amount' }
          }
      },
      // Optionally, project the final output to remove _id if not needed
      {
          $project: {
              _id: 0,
              totalSum: 1
          }
      }
  ]);
  
  const totalSum = result.length > 0 ? result[0].totalSum : 0; // Handle case when result is empty

    
    res.json(totalSum);

  }
  catch(error){
    console.error('Error in chart by user:', error);
  }
}
export const lEarningsadmin = async(req,res)=>{
  const publisherId = req.query.userId;
 
  try {
    const result = await Subscription.aggregate([
      // Match documents where the seller matches userId and dispatch is true
      { $match: { seller: new mongoose.Types.ObjectId(publisherId) } },
      // Group to calculate the total sum of amount and the count of documents
      {
          $group: {
              _id: null,
              totalSum: { $sum: '$amount' },
              count: { $sum: 1 }
          }
      },
      // Optionally, project the final output to remove _id if not needed
      {
          $project: {
              _id: 0,
              totalSum: 1,
              count: 1
          }
      }
  ]);
  
  // Handle the case when result is empty
  const { totalSum = 0, count = 0 } = result.length > 0 ? result[0] : {};
  
    
  res.status(200).json({
    success: true,
    data: {
        totalSum,
        count
    }
});

  }
  catch(error){
    console.error('Error in chart by user:', error);
  }
}
export const getBookRankAdmin = async(req,res)=>{
  const userId = req.query.sellerId;
  try {
    const result = await Subscription.aggregate([
      { $match: { seller: new mongoose.Types.ObjectId(userId) } },
      { $group: {
          _id: '$book',
          count: { $sum: 1 },
          totalAmount: { $sum: '$amount' }
      }},
      { $sort: { count: -1 } } // Sort by count in descending order
  ]);
  
    console.log("result:",result);
    res.json(result);
    
} catch (error) {
    console.error('Error getting subscription counts by user:', error);
    throw error;
}
}
export const gettransferrequests=async(req,res) =>{
  const sellerId=req.query.sellerId;
  try {
    const pendingPublisher = await Transfer.find({publisherId:sellerId});
    console.log("data",pendingPublisher);
    res.status(200).json({pendingPublisher})
  } catch (error) {
    console.log('No publishers with pending status found.');
  }
}
export const handleRejection = async(req,res)=>{
  const requestId=req.body.requestId;
  const request = await Transfer.findById(requestId);
  const { _id } = request;
  const result = await Transfer.updateMany(
    { _id: _id, status: "pending" },  // Filter condition using _id field and status "pending"
    { $set: { status: "rejected" } }  // Update operation to set status to "accepted"
  );

  

// Check if any documents were updated
if (result.modifiedCount > 0) {
  res.status(200).json({message:"accepted"})
} else {
  res.status(404).json({message:"not found"})
}
}
export const handleTransfer = async(req,res)=>{
  const requestId=req.body.requestId;
  const request = await Transfer.findById(requestId);
  const { _id } = request;
  const result = await Transfer.updateMany(
    { _id: _id, status: "pending" },  // Filter condition using _id field and status "pending"
    { $set: { status: "accepted" } }  // Update operation to set status to "accepted"
  );

  

// Check if any documents were updated
if (result.modifiedCount > 0) {
  res.status(200).json({message:"accepted"})
} else {
  res.status(404).json({message:"not found"})
}

  // const fund_account=await AccountDetailsModel.find({publisherId:request.publisherId});
  // console.log("function",fund_account);
  // console.log(razorpay)
  // if(request){
  //   const data = {
  //     account_number: process.env.account_number,
  //     fund_account_id: fund_account.fundAccount,
  //     amount: 100,
  //     currency: "INR",
  //     mode: "UPI",
  //     purpose: "refund",
  //     queue_if_low_balance: true,
  //     reference_id: "Acme Transaction ID 12345",
  //     narration: "Acme Corp Fund Transfer",
  //     notes: {
  //       notes_key_1: "Tea, Earl Grey, Hot",
  //       notes_key_2: "Tea, Earl Grey… decaf."
  //     }
  //   };
  //   const authString = Buffer.from(`${razorpay.key_id}:${razorpay.key_secret}`).toString('base64');
    
  //   axios.post('https://api.razorpay.com/v1/payouts', data, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Basic ${authString}`,
  //     },
  //   })
  //   .then(response => {
  //     console.log('Payout created:', response.data);
  //   res.status(200).json({data:response.data})

  //   })
  //   .catch(error => {
  //     console.error('Error creating payout:', error.response ? error.response.data : error);
  //   res.status(500).json({error:error})
      
  //   });
  
  // }
  // else{
  //   console.log('No publishers with pending status found.');

  // }
}