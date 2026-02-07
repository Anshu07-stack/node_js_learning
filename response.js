const http = require('http');

const server= http.createServer((req,resp)=>{
    resp.setHeader("Content-Type", "Text/html")
    resp.write('<h4>hello there...</h4>')
    resp.end();

})

server.listen(5400)