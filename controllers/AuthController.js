const { readFile, writeFile } = require("fs").promises;
const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
const sendMail = require("../mail/sendMail");
const mailBody = require("../mail/template/mailBody");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getCountryByname = async (req, res) => {
  try {
    let { country } = await formData(req);
    console.log(country);
  } catch (error) {
    console.log("country error is", error);
  }
};

exports.login = async (req, res) => {
  try {
    let data = await formData(req);

    let isValidationErrors = validate(data);
    const { email, password } = data;
    if (isValidationErrors) {
      res.end(isValidationErrors);
    } else {
      let user = await User.findOne({ email: email });
      let passwordEncrypt = await bcrypt.compare(password, user.password);

      switch (true) {
        case !user:
          res.end("User not found");
          break;
        case !passwordEncrypt:
          res.end("Password doesn't match");
          break;
        default:
          res.end("You have login successfully.");
          break;
      }
    }
  } catch (error) {
    console.log("Login error is:", error);
    res.end(JSON.stringify({ error: error.message }));
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
      // Mail send to user
      sendMail(fileData, email);
      // Hash password
      let hashPassword = await bcrypt.hash(password, 10);

      // User created
      let userCreate = await User.create({
        name,
        email,
        verify_code: verifiyCode,
        is_verified: false,
        password: hashPassword,
      });

      if (userCreate) {
        res.end(
          JSON.stringify({
            message:
              "You have successfully created account, please check email to verify!",
          })
        );
      }
    }
    // res.end(validationErrors ? validationErrors : "Success");
  } catch (error) {
    console.error("Error is:", error.message);
  }
};

exports.verify = async (req, res) => {
  try {
    let data = await formData(req);
    let isValidationErrors = validate(data);
    const { email, verify_code } = data;
    if (isValidationErrors) {
      res.end(isValidationErrors);
    } else {
      let user = await User.findOne({
        email: email,
      });

      switch (true) {
        case !user:
          res.end("User is not found.");
          break;
        case user.is_verified:
          res.end("You already verified.");
          break;

        case user.verify_code != verify_code:
          res.end("Verify code doesn't match");
          break;

        default:
          user.verify_code = null;
          user.is_verified = true;
          user.save();
          res.end(
            JSON.stringify({
              message: "You have successfully verify your account.",
            })
          );
      }
    }
  } catch (error) {
    console.log("Verify Error is ", error.message);
  }
};
