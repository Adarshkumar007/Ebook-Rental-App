import express from 'express';
import { getHome, signUp, logIn } from '../controllers/user_controller.js';
// import User from '../models/User';

const router = express.Router();

router.get('/', getHome);

router.post('/api/signup', signUp);
router.post('/api/login', logIn);

export default router;
