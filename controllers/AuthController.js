const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
exports.login = (res) => {
  res.end("Login page");
};

exports.register = async (req, res) => {
  try {
    // Get form data
    let data = await formData(req);
    const { name, email } = data;

    res.end(validate(data));
    // if (name == "") {
    //   res.end(
    //     JSON.stringify({ message: "Name should not be empty!", status: false })
    //   );
    // }
  } catch (error) {
    console.log(error);
  }
};
