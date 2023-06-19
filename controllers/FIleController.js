const { mkdir } = require("fs/promises");
const fs = require("fs");

exports.creteFolder = async (res) => {
  // Directory Created in syncronus callback way
  fs.mkdir(__dirname + "/old", { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Created Folder");
    }
  });

  // Directory Created in asyncronous promise way
  try {
    let currentDirectory = __dirname;
    let folder = mkdir(`${currentDirectory}/new`, { recursive: true });
    res.end("Created");
  } catch (error) {
    console.log("Dirictory error:", error);
  }
  // res.end("File controller");
};
