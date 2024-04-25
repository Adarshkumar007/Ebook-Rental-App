import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // Add any other fields you need for your category schema
});

export const Category = mongoose.model('Category', categorySchema);
