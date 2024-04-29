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