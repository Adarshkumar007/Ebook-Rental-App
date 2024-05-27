import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    plan: { type: String, required: true },
    amount: { type: Number, required: true },
    start_date: { type: Date, default: () => {
        const date = new Date();
        return date.toISOString().split('T')[0]; 
    } },
    end_date: { type: Date, required: true },
    status: { type: String, enum: ['active', 'expired'], default: 'active' },
    created_at: { type: Date, default: Date.now }
});

export const Subscription = mongoose.model('Subscription', SubscriptionSchema);
