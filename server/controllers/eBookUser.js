import { eBook } from "../models/ebook.js";
import pkg from 'pdfjs-dist/build/pdf.js';
import { Subscription } from "../models/subscription.js";
import mongoose from 'mongoose';
import { Transfer } from "../models/request.js";
import  { AccountDetailsModel } from "../models/acoount.js";
import { Seller } from "../models/Seller.js";
import Razorpay from 'razorpay';  
import axios from 'axios';

import dotenv from 'dotenv';
dotenv.config();
const razorpay = new Razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET
});
export const eBookPreImage=async (req, res) => {
    try {
      const ebook = await eBook.find({}).select('_id bookImage');
      if (!ebook) {
        return res.status(404).json({ message: 'Ebook not found' });
      }
      const updatedEbook = ebook.map(item => {
        const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
        const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
        return { _id: item._id, imageSrc: imageSrc };
      });
      res.status(200).json(updatedEbook);
    } catch (error) {
      console.error('Error fetching ebook:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const eBookDisplay= async(req, res) => {
    const key = req.query.key; // Get the 'key' query parameter
    try {
    console.log("keasdsay",key);

    const ebook = await eBook.findById(key);
    if(ebook){
    const imageBase64 = Buffer.from(ebook.bookImage.data).toString('base64');
    const imageSrc = `data:${ebook.bookImage.contentType};base64,${imageBase64}`;
    const fileBase64 = Buffer.from(ebook.preFile.data).toString('base64');
     const fileSrc = `data:${ebook.preFile.contentType};base64,${fileBase64}`;
    //const pdfBuffer =ebook.bookFile.data;
    //const pageNumbers = [1, 2, 3];
    
      // const pages = await extractPagesFromPdfBuffer(pdfBuffer, pageNumbers);
      const eBookObj = {
          id:ebook._id,
          title: ebook.title,
          publisherName: ebook.publisherName,
          category: ebook.category,
          imageSrc: imageSrc,
          pages: fileSrc,
          description: ebook.description
      };
      res.json(eBookObj);
      }
      else {
        res.status(404).json({ error: 'Ebook not found' });
    }
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to extract pages from PDF' });
  }
  
    
};
export const ebookFile= async(req, res) => {
  const key = req.query.key; // Get the 'key' query parameter
  const publisherId = req.user.userId;

  try {
  console.log("keasdsay",key);
  const isSubscribed=await Subscription.findOne({book:key,user:publisherId});
  if(isSubscribed){
  const ebook = await eBook.findById(key);
  if(ebook){
 
    const fileBase64 = Buffer.from(ebook.bookFile.data).toString('base64');
     const fileSrc = `data:${ebook.bookFile.contentType};base64,${fileBase64}`;
    //const pdfBuffer =ebook.bookFile.data;
    //const pageNumbers = [1, 2, 3]
    
      // const pages = await extractPagesFromPdfBuffer(pdfBuffer, pageNumbers);
      const eBookObj = {
          pages: fileSrc,
          title:ebook.title
      };
      res.json(eBookObj);
      }
      else {
        res.status(404).json({ error: 'Ebook not found' });
    }
  }
  else{
    console.log("not subscribed")
  }
  
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to extract pages from PDF' });
}

  
};
export const eBookSub= async(req, res) => {
  const key = req.query.bookId; 
  console.log("keyasdsa",key);
  try {
  const ebook = await eBook.findById(key).select('_id title bookImage plan');
  if(ebook){
  const imageBase64 = Buffer.from(ebook.bookImage.data).toString('base64');
  const imageSrc = `data:${ebook.bookImage.contentType};base64,${imageBase64}`;
    const eBookObj = {
        id:ebook._id,
        title: ebook.title,
        imageSrc: imageSrc,
        plans:ebook.plan
    };
    res.json(eBookObj);
    }
    else {
      res.status(404).json({ error: 'Ebook not found' });
  }
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to extract pages from PDF' });
}

  
};
export const getCategories = async(req,res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getBooks = async (req, res) => {
  const categoryType = req.params.category;
  try {
    const ebook = await eBook.find({category:categoryType}).select('_id bookImage category');
 

    if (ebook.length === 0) {
      return res.status(200).json([]);
    }
    console.log(categoryType);    
    const updatedEbook = ebook.map(item => {
      const imageBase64 = Buffer.from(item.bookImage.data).toString('base64');
      const imageSrc = `data:${item.bookImage.contentType};base64,${imageBase64}`;
      return { _id: item._id, imageSrc: imageSrc ,category:item.category };
    });
    res.status(200).json(updatedEbook);
  } catch (error) {
    console.error('Error fetching ebook:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
export const getBookInfo = async(req, res) => {
  const bookId = req.query.bookId;

  
  eBook.findById(bookId).select('_id title bookImage')
    .then(book => {    
      const imageBase64 = Buffer.from(book.bookImage.data).toString('base64');
      const imageSrc = `data:${book.bookImage.contentType};base64,${imageBase64}`;
      res.status(200).json({ _id: book._id, imageSrc: imageSrc ,title:book.title });
    })
    .catch(error => {
      console.error('Error fetching book information:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}
export const setadminbook = async(req, res) => {
  const publisherId = req.query.sellerId;

  try {
    const books = await eBook.find({ publisherId: publisherId }).select('_id title bookImage');

    const bookDetails = books.map(book => {
      const imageBase64 = Buffer.from(book.bookImage.data).toString('base64');
      const imageSrc = `data:${book.bookImage.contentType};base64,${imageBase64}`;
      return { _id: book._id, imageSrc: imageSrc, title: book.title };
    });

    res.status(200).json(bookDetails);
  } catch (error) {
    console.error('Error fetching book information:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export const getSubscribedBooksID = async(req,res) =>{
  const userId = req.user.userId;
console.log("sdfsd",userId);
    try {
      const subscribedBooks = await Subscription.find({user:userId}).select('_id book status end_date');
      console.log("subscr",subscribedBooks)
      res.json(subscribedBooks);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching books' });
    }
  
}
export const getBookimage = async(req, res) => {
  const bookId = req.params.book;
  console.log(bookId,"sdfsd");
  eBook.findById(bookId).select('bookImage')
    .then(book => {    
      const imageBase64 = Buffer.from(book.bookImage.data).toString('base64');
      const imageSrc = `data:${book.bookImage.contentType};base64,${imageBase64}`;
      res.status(200).json({ imageSrc: imageSrc });
    })
    .catch(error => {
      console.error('Error fetching book information:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
}
export const isSubscribed = async (req, res) => {
  const key = req.query.bookId;
  const userId = req.user.userId;
  const plan = req.query.plan;
  console.log("plan",plan);
  try {
    let exists=false;
    if(plan){
     exists = await Subscription.exists({ book: key, user: userId ,plan:plan});
    }
    else{
     exists = await Subscription.exists({ book: key, user: userId});

    }
    if (exists) {
      console.log("Subscription found");
      res.status(200).json({ subscribed: true });
    } else {
      console.log("Subscription not found");
      res.status(200).json({ subscribed: false });
    }
  } catch (err) {
    console.error("Error checking for subscription presence:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export const getBookRank = async(req,res)=>{
  const userId = req.user.userId;
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
export const bookChart = async(req,res)=>{
  const publisherId = req.user.userId;
 
  try {
    const result = await Subscription.aggregate([
      {
        $lookup: {
          from: 'books',
          localField: 'book',
          foreignField: '_id',
          as: 'bookDetails'
        }
      },
      { $unwind: '$bookDetails' },
      {
        $match: {
          'bookDetails.publisherId':new mongoose.Types.ObjectId(publisherId)
        }
      },
      {
        $group: {
          _id: '$bookDetails.category',
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);
    
    res.json(result);

  }
  catch(error){
    console.error('Error in chart by user:', error);
  }
}

export const cEarnings = async(req,res)=>{
  const publisherId = req.user.userId;
 
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
export const lEarnings = async(req,res)=>{
  const publisherId = req.user.userId;
 
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

export const withdraw =async(req,res)=>{
  const publisherId = req.user.userId;
  console.log("reached");
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
  await Subscription.updateMany(
    { seller: new mongoose.Types.ObjectId(publisherId), dispatch: "false" },
    { $set: { dispatch: "true" } }
  );
  const totalSum = result.length > 0 ? result[0].totalSum : 0; // Handle case when result is empty
  const newTransfer = new Transfer({ publisherId, amount:totalSum });
  console.log("reached",totalSum);

  newTransfer.save()
    .then(transfer => res.json(transfer))
    .catch(err => res.status(400).json('Error: ' + err));
  
}
catch(error){
  console.error('Error in chart by user:', error);
}

}
export const getAccountInfo=async(req,res)=>{
  const publisherId = req.user.userId;
  try {
    const accountInfo = await AccountDetailsModel.find({ publisherId: publisherId }).select('name bankname accountnumber branch ifsc micr upi phone');
    if(accountInfo){
      res.status(200).json(accountInfo);

    }
    else{
      res.status(200).json({});
    }
  } catch (error) {
    
  }
}


// GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js';

// async function extractPagesFromPdfBuffer(pdfBuffer, pageNumbers) {
//   const pdf = await getDocument({ data: pdfBuffer }).promise;
//   const pagesData = [];
//   for (const pageNumber of pageNumbers) {
//     if (pageNumber <= pdf.numPages) {
//       const page = await pdf.getPage(pageNumber);
//       const pageData = await page.getTextContent();
//       pagesData.push(pageData);
//     }
//   }
//   return pagesData;
// }
