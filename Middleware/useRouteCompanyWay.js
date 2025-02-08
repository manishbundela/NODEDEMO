const express=require('express');
const MilddlewareFilter=require('./MilddlewareFilter');
const app=express();
const route=express.Router();
//var d=reqfilter.filter;
route.use(MilddlewareFilter.reqfilter1);

route.get("/",(req,resp)=>{
    resp.send("good way");
});

app.get("/a",(req,resp)=>{
    resp.send("not route");
});

app.use('/',route);

app.listen(8080);


