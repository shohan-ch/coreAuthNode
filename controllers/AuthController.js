const { formData } = require("../lib/formData");
const { validate } = require("../lib/validate");
exports.login = (res) => {
  res.end("Login page");
};

exports.register = async (req, res) => {
  try {
    let data = await formData(req);
    const { name, email } = data;
    res.end(validate({ name: "required" }));
    // if (name == "") {
    //   res.end(
    //     JSON.stringify({ message: "Name should not be empty!", status: false })
    //   );
    // }
    console.log(name);
    res.end("Register page");
  } catch (error) {
    console.error(error);
  }
};
