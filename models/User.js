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
  verify_code: {
    type: Number,
    max: 4,
    default: null,
  },
  is_verified: {
    type: Boolean,
    required: false,
    default: false,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
