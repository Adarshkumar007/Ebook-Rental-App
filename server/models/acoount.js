import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const accountDetailsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bankname: {
    type: String,
    required: true,
  },
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true
  },
  accountnumber: {
    type: String,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  ifsc: {
    type: String,
    required: true,
  },
  micr: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  fundAccount:{
    type: String,
    required: true,
  },
}, { timestamps: true });


export const AccountDetailsModel = mongoose.model('AccountDetails', accountDetailsSchema);
