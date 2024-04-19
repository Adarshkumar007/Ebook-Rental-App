import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookIds: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    }],
    quantity: {
        type: Number,
        default: 1
    }
});


export const Cart = mongoose.model('Cart', cartSchema);