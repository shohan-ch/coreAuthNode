const http =  require('http');

const server = http.createServer((req,res)=>{

    res.end('Home page')

})

server.listen('3000',()=>{
    console.log('Server listen at 8000')

})