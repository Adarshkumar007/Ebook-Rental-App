import express from 'express';
import { getHome, signUp, logIn, sendotp, newPasswordController, sellerLogIn, sellerSignUp, authenticateToken, userProfile, profileUpdate, getBooksId } from '../controllers/user_controller.js';
import { validateOTP } from '../controllers/OTPController.js';
// import User from '../models/User';
import multer from 'multer';
import { addcart, eBookCollection, eBookPublish, removeCart } from '../controllers/eBookPublish.js';
import {eBookDisplay, eBookPreImage, eBookSub, getBookInfo, getBookRank, getBookimage, getBooks, getCategories, getSubscribedBooksID, isSubscribed} from '../controllers/eBookUser.js';
import { dislikes_Update, getReviews, getReviewsCount, likes_Update, ratings, userInfo, user_reviews } from '../controllers/ratings.js';
import { order, subscribe, verifyPayment } from '../controllers/paymentController.js';
import { orderDetails } from '../controllers/orderController.js';
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
router.get('/', getHome);
router.post('/api/signup',upload.fields([{ name: 'profile_image', maxCount: 1 }]), signUp);
router.post('/api/sellersignup',upload.fields([{ name: 'profile_image', maxCount: 1 }]), sellerSignUp);
router.post('/api/login', logIn);
router.post('/api/sellerlogin', sellerLogIn);
router.post('/api/sendotp',sendotp);
router.post('/api/verifyotp',validateOTP);
router.post('/api/resetpassword',newPasswordController);
router.post('/publish', authenticateToken,  upload.fields([{ name: 'file', maxCount: 1 },{ name: 'prefile', maxCount: 1 }, { name: 'image', maxCount: 1 }]) , eBookPublish);
router.get('/profile', authenticateToken, userProfile);
router.get('/api/orders', authenticateToken,orderDetails);
router.post('/profileupdate',authenticateToken,upload.fields([{ name: 'profile_image', maxCount: 1 }]),profileUpdate);
router.get('/api/home',eBookPreImage);
router.get('/ebook',eBookDisplay);
router.get('/ebooksub',authenticateToken, eBookSub);
router.get('/collection',authenticateToken,eBookCollection);
router.post('/addcart',authenticateToken,addcart);
router.get('/api/getBookIds',authenticateToken,getBooksId);
router.get('/api/categories',getCategories);
router.get('/api/home/:category',getBooks);
router.get('/api/reviews/:bookId/:currentRating', getReviews);  
router.post('/rating',authenticateToken,ratings);
router.get('/api/reviewCounts/:bookId',getReviewsCount);
router.get('/api/userinfo/:userId',userInfo);
router.post('/api/bookreview/likes',authenticateToken,likes_Update);
router.post('/api/bookreview/dislikes',authenticateToken,dislikes_Update);
router.get('/reviews',authenticateToken,user_reviews);
router.get('/bookinfo',getBookInfo);
router.get('/removefromcart/:id',authenticateToken,removeCart);
router.post('/subscribe',authenticateToken,order);
router.post('/api/verify',verifyPayment);
router.post('/api/payment-success',subscribe);
router.get('/api/subscriptionbooksIDs',authenticateToken,getSubscribedBooksID);
router.get('/bookimage/:book',getBookimage);
router.get('/issubscribed',authenticateToken,isSubscribed);
router.get('/bookrank',authenticateToken,getBookRank);
export default router;
