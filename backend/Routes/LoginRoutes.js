const express = require("express");
const { loginUser, googleLogin } = require("../controllers/LoginControllers.js");

const router = express.Router();

// Regular Email/Password Login
router.post("/login", loginUser);

// Google Sign-In
router.post("/google-login", googleLogin);

module.exports = router;