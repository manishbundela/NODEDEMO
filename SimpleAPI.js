 const http=require('http');
const apidata=require('./apidata'); /*import other file data*/
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    //resp.write(JSON.stringify({name:'manish',mail:'manish@gmail.com'}));
    resp.write(JSON.stringify(apidata.jaondata));
    resp.end();

}).listen(8000);