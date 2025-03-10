const express = require('express');
const { changePassword } = require('../controllers/cpController.js');

const router = express.Router();

router.post('/change', changePassword);

module.exports = router;
