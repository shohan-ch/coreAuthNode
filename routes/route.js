const AuthController = require("../controllers/AuthController");

exports.route = (req, res) => {
  // Auth Route
  if (req.url == "/login") {
    AuthController.login(res);
  }
  if (req.url == "/register" && req.method == "POST") {
    AuthController.register(req, res);
  }
};
