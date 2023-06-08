const { createServer } = require("https");
const { readFileSync } = require("fs");

const option = {
  key: readFileSync("./sslKey/localhost.key"),
  cert: readFileSync("./sslKey/localhost.crt"),
};

// console.log(option);
const server = createServer(option, (req, res) => {
  res.writeHead(200);
  res.end("Hello from Node!\n");
});

server.listen(3000, () => {
  console.log(`Server listen at port:3000`);
});
