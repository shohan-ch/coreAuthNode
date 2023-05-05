const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

const User = mongoose.model("Userp", userSchema);

module.exports = User;
