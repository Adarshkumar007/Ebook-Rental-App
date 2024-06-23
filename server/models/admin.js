import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});



export const Admin = mongoose.model('Admin', adminSchema); // Use singular and capitalized name
