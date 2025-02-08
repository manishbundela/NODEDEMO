const express=require('express');
const app= express();

app.get('/',(req,resp)=>{
  resp.send('hi i am here');  
});


app.get('/about',(req,resp)=>{
    resp.send('hi i am here....');  
  });
  app.listen(8080);