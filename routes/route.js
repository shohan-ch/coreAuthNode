const AuthController = require("../controllers/AuthController");

exports.route = (req, res) => {
  // Auth Route
  if (req.url == "/login") {
    AuthController.login(res);
  }
  if (req.url == "/register") {
    AuthController.register(req, res);
  }
};
