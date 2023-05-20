const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// all routes
const routes = require("./router/index");
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.port, () => {
    console.log(`API listening on PORT ${process.env.port} `);
  });
});
