const express = require('express');
const { forgotPassword } = require('../controllers/fpController.js');

const router = express.Router();

router.post('/forgotpassword', forgotPassword);

module.exports = router;