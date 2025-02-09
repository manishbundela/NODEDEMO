const express=require('express');
const doConnection=require('./mongoDbconfig');
const app= express();


app.get('/find',async (req,resp)=>{
  console.log('call find api!');
  const db=await doConnection();
  let data =await db.find().toArray();
  resp.send(data);  

});


//http://localhost:5050/get?name=murthi  
//get ka sath body pass nhai kar sathet hai but Query param dal saketa hai
app.get('/get',async (req,resp)=>{
  const names=req.query.name;
  console.log('call get api name!'+names);
  const db=await doConnection();   
  let data =await db.find({name:names}).toArray();
  resp.send(data);  

});

app.listen(5050);