const express=require('express');
const app=express();

const filter=(request,response,next)=>{
    if(!request.query.age){
        response.send('Please Provde valid Age!');

    }else if(request.query.age<=18){
        response.send('Age is less then 18!');
    }else{
        next();
    }
}

//Apply Route level Filter(MiddleWare)
app.get("/RoutesLevel",filter,(req,resp)=>{
    resp.send("Print Age::> "+req.query.age);
});

//Not Apply Route level Filter(MiddleWare)
app.get("/NotRoutesLevel",(req,resp)=>{
    resp.send("Not apply Route Level Middleware");
});

app.listen(8080);