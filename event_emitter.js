const express=require('express');
const EventEmitter=require('events');
const app=express();

let count=0;
const event=new EventEmitter();
event.on('countAPI',()=>{
    count++; 
    console.log('event called_ '+count); //also save in db.
});

app.get("/",(req,resp)=>{
    resp.send("Api called");
    event.emit('countAPI');
});

app.listen(8080);