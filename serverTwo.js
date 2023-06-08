const {createServer} = require("https");
const {readFileSync} =  require('fs') 


const option =  {
      key: readFileSync("./key.pem", 'utf8'),
      cert: readFileSync("./cert.pem", 'utf8'),
    };

const server = createServer( option, (req, res) => {
    res.end("Https Server created");
  
});

server.listen(3001, () => {
  console.log(`Server listen at port:3000`);
});

