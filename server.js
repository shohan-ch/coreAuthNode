const http =  require('http');
const { route } = require('./routes/route');
const server = http.createServer(route)

server.listen('3000',()=>{
    console.log('Server listen at 8000')
})