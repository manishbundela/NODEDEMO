const express=require('express');
const app=express();

const reqfilter=(request,response,next)=>{
    console.log("Apply Filter");
    if(!request.query.age){
        response.send('Please Provide vaild age');
    }
    if(request.query.age<=18){
        response.send('age is less then 18');
    }else {
        next();
    }
}

app.use(reqfilter);

app.get("/",(req,resp)=>{
    resp.send("welcome we are here with age"+req.query.age);
});

app.listen(8080);