const mongoose = require("mongoose");
const database = "auth";

exports.DbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/" + database);
    console.log("Database connected");
  } catch (error) {
    console.log("Error for connecting", error);
  }
};
