const express=require('express');
const path=require('path');

const app=express();
const dirpath=path.join(__dirname,"public");


app.get("/h",(req,resp)=>{
    resp.sendFile(dirpath+'/home.html');
});

app.get("/a",(req,resp)=>{
    resp.sendFile(dirpath+'/about.html');
});

app.get("*",(req,resp)=>{
    resp.sendFile(dirpath+'/404.html');
});

app.listen(5000);