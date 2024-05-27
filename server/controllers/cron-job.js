import cron from 'node-cron';
import { Subscription } from '../models/subscription.js';

// Target date in the format 'YYYY-MM-DD'
const targetDateStr = '2024-08-24';

cron.schedule('0 0 * * *', async () => {
  try {
    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString().split('T')[0];

    if (currentDateStr === targetDateStr) {
      // Your job logic here
      const result = await Subscription.updateMany(
        { endDate: { $lte: currentDate }, status: 'active' },
        { $set: { status: 'expired' } }
      );

      console.log(`${result.nModified} subscriptions updated to expired`);
    } else {
      console.log('Today is not the target date.');
    }
  } catch (error) {
    console.error('Error updating subscriptions:', error);
  }
});
