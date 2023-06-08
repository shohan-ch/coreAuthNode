const https = require("https");

const server = https.createServer((req, res) => {
  console.log(req);
  if (req.url == "/") {
    res.end("Https Server created");
  }
});

server.listen(3000, () => {
  console.log(`Server listen at port:3000`);
});