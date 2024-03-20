import bcrypt from 'bcrypt';
import {Otp, User} from '../models/User.js'
import jwt from 'jsonwebtoken';
import { sendEmail } from './OTPController.js';
import { Seller } from '../models/Seller.js';
export const getHome=(req, res) =>{
    res.send('this works!');
};


export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: 'User created successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const sellerSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Seller({ username, email, password: hashedPassword });
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
      return res.status(200).json({ message: 'Login successful', token, username:user.username });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Login failed' });
    }
  };
  export const sendotp = async (req, res) => {
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
  
  const {email,newPassword}=req.body;
  console.log("hello");
  try {
    const updatedUser = await Otp.findOneAndUpdate(
      { email: email },
      { password: newPassword },
      { new: true }
    );
    res.json({ message: 'Password Updated' });
  } catch (error) {
    res.status(500).json({ message: 'Password update failed' });
  }
}