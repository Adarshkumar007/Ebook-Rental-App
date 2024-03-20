import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true }, // Add index to email field
  password: { type: String, required: true },
});
export const Seller = mongoose.model('Seller', sellerSchema);