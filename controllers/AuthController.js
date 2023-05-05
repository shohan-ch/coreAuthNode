const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
const User = require("../models/User");
exports.login = async (res) => {
  try {
    let users = User.findOne({}).then((res) => console.log(res.name));
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log(error);
  }
};

exports.register = async (req, res) => {
  try {
    // Get form data
    let data = await formData(req);
    let validationErrors = validate(data);
    const { name, email, password, confirm_password } = data;
    if (validationErrors) {
      res.end(validationErrors);
    } else {
      res.end("Success");
    }
    // res.end(validationErrors ? validationErrors : "Success");
  } catch (error) {
    console.log(error);
  }
};
