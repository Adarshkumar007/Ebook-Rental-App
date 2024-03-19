import express from 'express';
import { getHome, signUp, logIn, sendotp } from '../controllers/user_controller.js';
// import User from '../models/User';

const router = express.Router();

router.get('/', getHome);

router.post('/api/signup', signUp);
router.post('/api/login', logIn);
router.post('/api/sendotp',sendotp);

export default router;
