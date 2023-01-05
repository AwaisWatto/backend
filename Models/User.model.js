const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let a=4
const b=5

var userSchema = new Schema({
  firstName:  {
    type: String,
    required: "Please Enter First Name",
  },

  lastName: {
    type: String,
    required: "Please Enter Last Name",
  },

  phone: {
    type: Number,
    required: "Please Enter Phone Number",
  },

  email: {
    type: String,
    required: "Please Enter Email",
  },

  password: String,

  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  dateUpdated: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", userSchema);
