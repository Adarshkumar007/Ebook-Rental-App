import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
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

const otpSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true }, // Add index to email field
  otp: { type: String, required: true },
  createdAt: { type: Date, expires: '5m', default: Date.now } // OTP expires after 5 minutes
});

export const Otp = mongoose.model('Otp', otpSchema); // Use singular and capitalized name
export const User = mongoose.model('User', userSchema); // Use singular and capitalized name
