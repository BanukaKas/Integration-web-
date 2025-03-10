const express = require('express');
const { verifyOTP } = require('../controllers/otpController.js');

const router = express.Router();

router.post('/verifyotp', verifyOTP);

module.exports = router;
