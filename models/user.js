const mongoose = require("mongoose");

// this is User Schema
const userSchema = new  mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  isLogin: { type: Boolean,  default: false },
},
{timeStamp : true});

// below code help to export this module
module.exports = mongoose.model("users", userSchema);
