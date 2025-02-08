
const express=require('express');
const app= express();

app.get("/about",(req,resp)=>{
    resp.send('<a href="/home">click for home</a>');
});

app.get("/home",(req,resp)=>{
    resp.send('<a href="/about">click for about</a>');
});

app.listen(8080);