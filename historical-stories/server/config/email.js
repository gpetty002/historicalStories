// email.js

// complete this once you purchase a domain for this

// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

// const sendVerificationEmail = async (user) => {
//   const token = jwt.sign({ userId: user._id }, "your_jwt_secret", {
//     expiresIn: "1h",
//   });
//   user.verificationToken = token;
//   await user.save();

//   const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "your_email@gmail.com",
//       pass: "your_email_password",
//     },
//   });

//   const mailOptions = {
//     from: "your_email@gmail.com",
//     to: user.email,
//     subject: "Email Verification",
//     text: "Click on this "
//   }

// };
