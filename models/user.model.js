const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  status: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  pic: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("users", usersSchema);
