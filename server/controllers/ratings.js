import  mongoose from 'mongoose';
import { User } from '../models/User.js';
import { RatingReview } from '../models/reviewsandratings.js';


export const ratings = async (req, res) =>{
    try{
    const userId = req.user.userId;
    const {rating,review,bookId} = req.body;
    console.log(rating,review,bookId);
    const newReview= new RatingReview({
        userId,
        bookId,
        rating,
        review
    });
    await newReview.save();
    return res.status(201).json({ message: 'Review added successfully' });
}catch (error) {
    console.error('Error adding review:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }

}   
export const getReviews = async (req, res) => {
    const { bookId, currentRating } = req.params;
    try {
      // Find all ratings and reviews for the given bookId
      const reviews = await RatingReview.find({ bookId, rating:currentRating });
      // console.log(bookId,currentRating);
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}

export const getReviewsCount =  async (req, res) => {
    try {
      const {bookId}=req.params;
      const bookIdObject = new mongoose.Types.ObjectId(bookId);
      console.log("lsdk",bookIdObject);

const counts = await RatingReview.aggregate([
  { $match: { bookId: bookIdObject } },
  { $group: { _id: "$rating", count: { $sum: 1 } } }
]);
      
      // console.log("count",counts);
      
      // Create a map from the aggregated counts
      const reviewCounts = [
        { count: counts.find(count => count._id === 5)?.count || 0, numStar: 5 },
        { count: counts.find(count => count._id === 4)?.count || 0, numStar: 4 },
        { count: counts.find(count => count._id === 3)?.count || 0, numStar: 3 },
        { count: counts.find(count => count._id === 2)?.count || 0, numStar: 2 },
        { count: counts.find(count => count._id === 1)?.count || 0, numStar: 1 }
      ];
      // console.log("sd",reviewCounts);
      res.json(reviewCounts);
    } catch (error) {
      console.error("Error fetching review counts:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}
export const userInfo = async(req,res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({ _id:userId }).select('username profile_image');
      var imageSrc="";
      if(user.profile_image.data){
        const imageBase64 = Buffer.from(user.profile_image.data).toString('base64');
           imageSrc = `data:${user.profile_image.contentType};base64,${imageBase64}`;
        }
      // console.log(user);
      res.json({imageSrc:imageSrc,
      username:user.username,
    });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
}

export const likes_Update = async(req,res) =>{
  try {
    const { id } = req.body;
    const userId = req.user.userId;
    const reviewId = new mongoose.Types.ObjectId(id);
    const filter = { _id: reviewId };
    const update = {};
  
    // Check if the user is already in the likes array
    const review = await RatingReview.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    const dislikesSet = new Set(review.dislikes.map(String)); 
    if (dislikesSet.has(userId)) {
      // User is already in the likes, remove them
      update.$pull = { dislikes: userId };
    } 
    const likesSet = new Set(review.likes.map(String)); // Convert ObjectId array to string set for easy checking
    if (likesSet.has(userId)) {
      // User is already in the likes, remove them
      update.$pull = { likes: userId };
    } else {
      // User is not in the likes, add them
      update.$addToSet = { likes: userId };
    }
  
    const options = { new: true };
    const updatedDocument = await RatingReview.findOneAndUpdate(filter, update, options);
  
    if (updatedDocument) {
      console.log('Document updated:', updatedDocument);
    } else {
      console.log('Document not found or not updated.');
    }
    res.status(200).json({ message: "Likes updated" });
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  
}
export const dislikes_Update = async(req,res) =>{
  try {
    const { id } = req.body;
    const userId = req.user.userId;
    const reviewId = new mongoose.Types.ObjectId(id);
    const filter = { _id: reviewId };
    const update = {};
  
    // Check if the user is already in the likes array
    const review = await RatingReview.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    const likesSet = new Set(review.likes.map(String)); // Convert ObjectId array to string set for easy checking
    if (likesSet.has(userId)) {
      // User is already in the likes, remove them
      update.$pull = { likes: userId };
    }
    const dislikesSet = new Set(review.dislikes.map(String)); 
    if (dislikesSet.has(userId)) {
      // User is already in the likes, remove them
      update.$pull = { dislikes: userId };
    } else {
      // User is not in the likes, add them
      update.$addToSet = { dislikes: userId };
    }
  
    const options = { new: true };
    const updatedDocument = await RatingReview.findOneAndUpdate(filter, update, options);
  
    if (updatedDocument) {
      console.log('Document updated:', updatedDocument);
    } else {
      console.log('Document not found or not updated.');
    }
    res.status(200).json({ message: "DisLikes updated" });
  
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
  
}
export const user_reviews = async(req , res) =>{
  const userId = req.user.userId;
  try {
    const reviews = await RatingReview.find({ userId: userId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "fetching user review failed" });
  }
  

}