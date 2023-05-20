const router = require("express").Router();

// controllers

const { sendOTP, createUser } = require("../controller/auth.controller");

router.post("/send-otp", sendOTP);
router.post("/createUser", createUser);

module.exports = router;
