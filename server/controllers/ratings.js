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
      console.log(bookId,currentRating);
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}

export const getReviewsCount =  async (req, res) => {
    try {
      // Aggregate the counts of reviews based on the numStar field
      const counts = await RatingReview.aggregate([
        { $group: { _id: "$rating", count: { $sum: 1 } } }
      ]);
      
      // Create a map from the aggregated counts
      const reviewCounts = [
        { count: counts.find(count => count._id === 5)?.count || 0, numStar: 5 },
        { count: counts.find(count => count._id === 4)?.count || 0, numStar: 4 },
        { count: counts.find(count => count._id === 3)?.count || 0, numStar: 3 },
        { count: counts.find(count => count._id === 2)?.count || 0, numStar: 2 },
        { count: counts.find(count => count._id === 1)?.count || 0, numStar: 1 }
      ];
      console.log("sd",reviewCounts);
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
      console.log(user);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
}