import bcrypt from 'bcrypt';
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken';
import { sendEmail } from './OTPController.js';
import { Seller } from '../models/Seller.js';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;
export const getHome=(req, res) =>{
    res.send('this works!');
};


export const signUp = async (req, res) => {
  const {username, email, password, address, pin, phone } = req.body;
  console.log(req.body);
  const profile_image = req.files['profile_image'][0];
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, address, pin, phone, password: hashedPassword,profile_image: {
      data: profile_image.buffer,
      contentType: profile_image.mimetype
    } });
    await newUser.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const sellerSignUp = async (req, res) => {
  const { username, email, address, pin, phone, password } = req.body;
  console.log(req.files);
  const profile_image = req.files['profile_image'][0];
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Seller({ username, email, address, pin, phone, password: hashedPassword,profile_image: {
      data: profile_image.buffer,
      contentType: profile_image.mimetype
    } });
    await newUser.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const logIn = async (req, res) => {
  console.log("asds",req.body);
    const { email, password } = req.body;
    console.log(email,password);
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login successful', token, username:user.username });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Login failed' });
    }
  };

  export const sellerLogIn = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    console.log(email,password);
    try {
      const user = await Seller.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
     
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
      console.log(user.username);
      return res.status(200).json({ message: 'Login successful', token, username:user.username });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Login failed' });
    }
  };
  export const sendotp = async (req, res) => {
    const email=req.body.email;
    const isSignUp=req.body.isSignUp;
    const userType=req.body.userType;
    console.log("hiiihello",isSignUp);
    if(!isSignUp){
      let user;
      if(userType==="user"){
         user = await User.findOne({ email });
      }else{
        user = await Seller.findOne({ email });
      }
    console.log("hiiiii");
    if(!user){
      return res.status(401).json({ message: 'Invalid Email' });
    }
  }
    const otp = Math.floor(Math.random() * 10000);
     sendEmail(
      req.body.email,
      'Reset Password OTP',
      `Your OTP is: ${otp} `,
      `<p>Your OTP is: <b> ${otp}</b></p>`,
      otp,
      (error, info) => {
        console.log("ddf",error);
        if (error) {
          res.status(401).json({ message: 'Failed to send OTP' });
        } else {
          res.status(200).json({ message: 'success', email: req.body.email });
        }
      }
    );
  };
export const newPasswordController=async(req,res)=>{
  
  const {email,newPassword,userType}=req.body;
  console.log("email",email,newPassword);
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    if(userType==="user"){
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true }
    );
    }
    else{
      const updatedUser = await Seller.findOneAndUpdate(
        { email: email },
        { password: hashedPassword },
        { new: true }
      );
    }
    res.json({ message: 'Password Updated' });
  } catch (error) {
    res.status(500).json({ message: 'Password update failed' });
  }
}
export const userProfile=async(req,res)=>{
  const userId = req.user.userId;
  const userType=req.query.userType;
  console.log(userId);
  if (!ObjectId.isValid(userId)) {
    res.status(400).json({ error: 'Invalid user ID' });
    return;
  }
  let user;
  try {
    console.log(userType);
    if(userType==="user"){
      
    user = await User.findById(userId);
    }
    else{
     user = await Seller.findById(userId);  
    }
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    console.log("hello",user);
    const imageBase64 = Buffer.from(user.profile_image.data).toString('base64');
    const imageSrc = `data:${user.profile_image.contentType};base64,${imageBase64}`;
    res.json({ username: user.username, email: user.email ,profile_image:imageSrc });
  } catch (err) {
    console.error('Error finding user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) 
    return res.sendStatus(403); // Forbidden
    req.user = user;
    next(); 
  });
};