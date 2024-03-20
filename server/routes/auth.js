import express from 'express';
import { getHome, signUp, logIn, sendotp, newPasswordController } from '../controllers/user_controller.js';
import { validateOTP } from '../controllers/OTPController.js';
// import User from '../models/User';

const router = express.Router();

router.get('/', getHome);

router.post('/api/signup', signUp);
router.post('/api/login', logIn);
router.post('/api/sendotp',sendotp);
router.post('/api/verifyotp',validateOTP);
router.post('/api/resetpassword',newPasswordController);
export default router;
