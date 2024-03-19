import nodemailer from 'nodemailer';

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'project.pixcom2024@gmail.com',
    pass: 'tjaa tfvy ureb shbd'
  }
});

// Function to send an email
export const sendEmail = (to, subject, text, html, callback) => {
    let mailOptions = {
      from: '"Rent Readers" <project.pixcom2024@gmail.com>',
      to: to,
      subject: subject,
      text: text,
      html: html
    };
  
    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        callback(error, null); // Return error to callback
      } else {
        console.log('Email sent:', info.response);
        callback(null, info); // Return info to callback
      }
    });
  };
  
