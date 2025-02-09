const express=require('express');
const doConnection=require('./mongoDbconfig');
const app= express();

app.use(express.json()); //used this Middleware for read json body after express 4.6

//insert data 
app.post("/", async(request,response)=>{
    const db=await doConnection();
    let result=await db.insertOne(request.body);
    if(result.acknowledged>=1){
        response.send("Suessfully insert");
    }else{
        response.send("Not Suessfully insert");
    }
});

app.listen(5050);