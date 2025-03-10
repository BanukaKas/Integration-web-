const db = require("../utils/db.js");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Forgot Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    db.query("SELECT * FROM user WHERE email = ?", [email], async (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }

      const user = result[0];

      // Save OTP to the database
      db.query("UPDATE user SET otp = ? WHERE email = ?", [otp, email], (updateErr) => {
        if (updateErr) return res.status(500).json({ error: updateErr.message });

        // Send OTP to user's email
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: "Password Reset OTP",
          text: `Your OTP for password reset is: ${otp}`,
        };

        transporter.sendMail(mailOptions, (emailErr) => {
          if (emailErr) return res.status(500).json({ error: emailErr.message });

          res.status(200).json({ message: "OTP sent successfully" });
        });
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  forgotPassword,
};
