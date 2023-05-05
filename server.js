const http = require("http");
const { route } = require("./routes/route");
const { DbConnect } = require("./models/DbConnect");

const startServer = async () => {
  try {
    await DbConnect();
    http
      .createServer(route)
      .listen("3000", () => console.log("Server listen at port: 3000"));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
