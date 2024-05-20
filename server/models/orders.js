import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    order_id: { type: String, required: true },
    plan: { type: Number, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    receipt: { type: String },
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' },
    payment_id: { type: String },
    created_at: { type: Date, default: Date.now }
});

export const Order = mongoose.model('Order', OrderSchema);
