const accountSid = "AC40981fc39364ae32561a1e214f5fa6b6";
const authToken = "7208c2ac3ab46eb967ab46b67075d9ac";
const client = require("twilio")(accountSid, authToken);
const User = require("../models/user.model");

const sendOTP = async (req, res) => {
  try {
    await client.messages.create({
      body: "Your OTP number 1234",
      to: req.body.targetNumber,
      from: "+12542563185",
    });
    return res.status(200).send({ otp: 1234 });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ messages: "failed" });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.status(200).send({ messages: "success" });
  } catch (err) {
    return res.status(500).send({ messages: "failed" });
  }
};

module.exports = { sendOTP, createUser };
