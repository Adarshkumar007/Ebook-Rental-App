import express from 'express';
import { getHome, signUp, logIn, sendotp, newPasswordController, sellerLogIn, sellerSignUp, authenticateToken, userProfile } from '../controllers/user_controller.js';
import { validateOTP } from '../controllers/OTPController.js';
// import User from '../models/User';
import multer from 'multer';
import { eBookPublish } from '../controllers/eBookPublish.js';
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.get('/', getHome);

router.post('/api/signup', signUp);
router.post('/api/sellersignup', sellerSignUp);

router.post('/api/login', logIn);
router.post('/api/sellerlogin', sellerLogIn);
router.post('/api/sendotp',sendotp);
router.post('/api/verifyotp',validateOTP);
router.post('/api/resetpassword',newPasswordController);
router.post('/publish', authenticateToken,  upload.fields([{ name: 'file', maxCount: 1 }, { name: 'image', maxCount: 1 }]) , eBookPublish);
router.get('/profile', authenticateToken, userProfile);
export default router;
