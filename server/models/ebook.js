import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

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
  authorName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  bookImage: {
    data: {
      type: Buffer,
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  bookFile: {
    data: {
      type: Buffer,
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  preFile: {
    data: {
      type: Buffer,
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  plan: [planSchema] // Add plan field
}, { timestamps: true });

export const eBook = mongoose.model('Book', ebookSchema);
