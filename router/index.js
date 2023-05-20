const router = require("express").Router();

// children routes

const authRoutes = require("./auth.router");

router.use("/auth", authRoutes);

module.exports = router;
