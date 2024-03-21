import express from 'express';
import { getHome, signUp, logIn, sendotp, newPasswordController, sellerLogIn, sellerSignUp, authenticateToken, userProfile } from '../controllers/user_controller.js';
import { validateOTP } from '../controllers/OTPController.js';
// import User from '../models/User';

const router = express.Router();

router.get('/', getHome);

router.post('/api/signup', signUp);
router.post('/api/sellersignup', sellerSignUp);

router.post('/api/login', logIn);
router.post('/api/sellerlogin', sellerLogIn);
router.post('/api/sendotp',sendotp);
router.post('/api/verifyotp',validateOTP);
router.post('/api/resetpassword',newPasswordController);
router.get('/profile', authenticateToken, userProfile);

export default router;
