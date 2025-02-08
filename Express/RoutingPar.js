
const express=require('express');
const app= express();

app.get("/about",(req,resp)=>{
    const reqData=req.query.name;
    console.log("request"+reqData);
    resp.send("Request recived>> "+reqData);
});

app.listen(8080);
