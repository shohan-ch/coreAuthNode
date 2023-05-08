const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
const User = require("../models/User");
exports.login = async (res) => {
  try {
    let users = await User.findOne();
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

exports.register = async (req, res) => {
  try {
    // Get form data
    let data = await formData(req);
    let isValidationErrors = validate(data);
    const { name, email, password, confirm_password } = data;
    if (isValidationErrors) {
      res.end(isValidationErrors);
    } else {
      let user = await User.findOne({ email: email });
      if (user) {
        res.end(JSON.stringify("Email is already taken"));
      } else {
        let verifiyCode = Math.floor(1000 + Math.random() * 9000);
        console.log(verifiyCode);

        res.end("Success");
      }
    }
    // res.end(validationErrors ? validationErrors : "Success");
  } catch (error) {
    console.error(error.message);
  }
};
