import nodemailer from 'nodemailer';
import { Otp } from '../models/User.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'project.pixcom2024@gmail.com',
    pass: 'tjaa tfvy ureb shbd'
  }
});

export const sendEmail = (to, subject, text, html,otp, callback) => {
  let mailOptions = {
    from: '"Rent Readers" <project.pixcom2024@gmail.com>',
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  transporter.sendMail(mailOptions, async (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      callback(error, null); // Return error to callback
    } else {
      console.log('Email sent:', info.response);
      const newOTP = new Otp({ email: to, otp: otp });
      await newOTP.save();
      callback(null, info); // Return info to callback
    }
  });
};

export const validateOTP = async (req, res) => {
    const { email, otp } = req.body;
    const savedOTP = await Otp.findOne({ email, otp });
    if (savedOTP) {
      // OTP is valid
      res.json({ message: 'OTP verified successfully' });
    } else {
      // OTP is invalid
      res.status(400).json({ message: 'Invalid OTP' });
    }
  };
