const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
exports.login = (res) => {
  res.end("Login page");
};

exports.register = async (req, res) => {
  try {
    // Get form data
    let data = await formData(req);
    let validationErrors = validate(data);
    const { name, email } = data;

    res.end(validationErrors ? validationErrors : "Success");
  } catch (error) {
    console.log(error);
  }
};
