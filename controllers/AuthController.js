const { formData } = require("../lib/formData");
exports.login = (res) => {
  res.end("Login page");
};

exports.register = async (req, res) => {
  try {
    let data = await formData(req);
    const { name, email } = data;
    if (name == "") {
      res.end(
        JSON.stringify({ message: "Name should not be empty!", status: false })
      );
    }
    console.log(data.name);
    res.end("Register page");
  } catch (error) {
    console.error(error);
  }
};
