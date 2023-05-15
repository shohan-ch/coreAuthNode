const { readFile, writeFile } = require("fs").promises;
const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
const sendMail = require("../mail/sendMail");
const mailBody = require("../mail/template/mailBody");
const User = require("../models/User");
const fs = require("fs").promises;

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
      }
      let verifiyCode = Math.floor(1000 + Math.random() * 9000);
      console.log(verifiyCode);

      // Write or create file
      let html = mailBody(verifiyCode);
      let fileCreate = writeFile("./mail/template/registrationMail.html", html);

      // Read a html file
      let fileData = await readFile(
        "./mail/template/registrationMail.html",
        "utf8"
      );

      sendMail(fileData, email);
      // res.end(file);
    }
    // res.end(validationErrors ? validationErrors : "Success");
  } catch (error) {
    console.error(error.message);
  }
};
