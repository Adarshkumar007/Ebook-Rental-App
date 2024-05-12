import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define a schema for ratings and reviews
const ratingReviewSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true
  },
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book', // Reference to the Book model
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  review: {
    type: String
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }],
  dislikes: [{
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const RatingReview = mongoose.model('RatingReview', ratingReviewSchema);
