import mongoose from 'mongoose';

const ebookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true
  },
  publisherName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  bookImage: {
    data: Buffer,
    contentType: String
  },
  bookFile: {
    data: Buffer,
    contentType: String
  },
  // Other required items
}, { timestamps: true });

export const eBook = mongoose.model('Book', ebookSchema);
