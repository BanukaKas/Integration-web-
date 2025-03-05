const express = require("express");
const {registerUser,addInquiery} = require('../controllers/UserControllers');

const router = express.Router();

router.post("/inquiery",addInquiery);

module.exports = router;