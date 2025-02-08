const d=(req,resp)=>{
    resp.write("hi i am good");
    resp.end();
}

const http = require('http');
http.createServer((req,resp)=>{
    resp.write("hi i am here");
    resp.end();
}).listen(4500);


const http1 = require('http');
http1.createServer(d).listen(4501);