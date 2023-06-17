const path = require("path");

exports.getPath = (res) => {
  console.log(__dirname);
  res.end(__filename);
};
