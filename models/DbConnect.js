const mongoose = require("mongoose");
const database = "auth";

exports.DbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/" + database);
    console.log("Database are connected");
  } catch (error) {
    console.log(error.message);
  }
};
