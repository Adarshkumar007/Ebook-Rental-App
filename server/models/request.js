import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const transferSchema = new Schema({
  publisherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
      }
});


export const Transfer = mongoose.model('Transfer', transferSchema);