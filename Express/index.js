const express=require('express');
const app= express();

const cors=require('cors');

app.use(cors()); // used for remove across-origin issue from browser side.

app.get('/',(req,resp)=>{
  resp.send('hi i am here');  
});


app.get('/about',(req,resp)=>{
    resp.send('hi i am here....');  
  });
  app.listen(8080);