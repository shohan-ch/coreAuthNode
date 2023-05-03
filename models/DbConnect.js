const mongoose = require("mongoose");

exports.DbConnect = async () => {
  try {
    const database = "auth  ";
    return await mongoose.connect("mongodb://localhost:27017/" + database);
  } catch (error) {
    console.log(error.message);
  }
};
