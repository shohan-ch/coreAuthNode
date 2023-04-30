const { parse } = require("querystring");
const { formData } = require("../lib/formData");
exports.login = (res) => {
  res.end("Login page");
};

exports.register = async (req, res) => {
  let data = await formData(req);
  console.log(data.name);
  res.end("Register page");
};
