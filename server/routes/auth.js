import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getHome, signUp, logIn } from '../controllers/user_controller.js';
// import User from '../models/User';

const router = express.Router();

router.get('/', getHome);

router.post('/signup', signUp);

router.post('/login', logIn);

export default router;
