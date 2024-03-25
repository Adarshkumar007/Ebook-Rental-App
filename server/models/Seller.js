import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  pin: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile_image: {
    data: Buffer,
    contentType: String
  },
});
export const Seller = mongoose.model('Seller', sellerSchema);