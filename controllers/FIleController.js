const { mkdir } = require("fs/promises");
const fs = require("fs");

exports.creteFile = async (res) => {
  try {
    let checkFile = fs.existsSync("./controllers/new/name.txt");
    if (!checkFile) {
      let file = await fs.promises.writeFile(
        "./controllers/new/name.txt",
        "My name is Shohan"
      );
      res.end("File created");
    } else {
      res.end("File Exist");
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteFile = (res) => {
  // Delete File within given path
  fs.unlink("controllers/new/name.txt", (err) => {
    if (err) {
      console.log(err.message);
    } else {
      res.end("File deleted");
    }
  });
};

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
