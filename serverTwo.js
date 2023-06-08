const { createServer } = require("https");
const { readFileSync } = require("fs");
const { default: axios } = require("axios");

// SSL certificate create for localhost
const option = {
  key: readFileSync("./sslKey/localhost.key"),
  cert: readFileSync("./sslKey/localhost.crt"),
};

// https module server
const server = createServer(option, async (req, res) => {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    res.writeHead(200);
    res.end(JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
    console.log("error is:", error.message);
  }
});

server.listen(3000, () => {
  console.log(`Server listen at port:3000`);
});
