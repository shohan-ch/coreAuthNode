const AuthController = require("../controllers/AuthController");
const FileController = require("../controllers/FileController");
const PathController = require("../controllers/PathController");

exports.route = (req, res) => {
  // Auth Route
  if (req.url == "/login") {
    AuthController.login(req, res);
  }
  if (req.url == "/register" && req.method == "POST") {
    AuthController.register(req, res);
  }
  if (req.url == "/verify" && req.method == "POST") {
    AuthController.verify(req, res);
  }
  if (req.url == "/country" && req.method == "POST") {
    AuthController.getCountryByname(req, res);
  }
  if (req.url == "/path" && req.method == "GET") {
    PathController.getPath(res);
  }
  if (req.url == "/file" && req.method == "GET") {
    FileController.creteFolder(res);
  }
};
