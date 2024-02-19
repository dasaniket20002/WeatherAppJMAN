// import necessary frameworks
const mongoose = require("mongoose");

// define the schema for the user
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create and export the user module
const User = mongoose.model("User", UserSchema);
module.exports = User;
