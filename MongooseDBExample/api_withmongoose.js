const express=require('express');
require('./mongoosedbconfig');
const products=require('./collectiondbconfig');

const app=express();

app.use(express.json()); //convert request into json

app.get("/find",async (req,resp)=>{
    let result=await products.find();
resp.send(result);
});

app.get("/findby/:name",async (req,resp)=>{
    console.log(req.params);
    let result=await products.find(req.params);
resp.send(result);
});

//it wiil chack key in both name and brand also
app.get("/findlike/:key",async (req,resp)=>{
    //console.log(req.params);
    let result=await products.find({
        "$or"[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]
    });
resp.send(result);
});

app.post("/create",async (req,resp)=>{
    //let data= new products(req.body);
   // let result=await data.save();
   let result=await products.insertOne(req.body);
resp.send(result);

});

app.put("/update/:name",async (req,resp)=>{
   // let result=await products.updateOne({name:req.params.name},{$set:req.body});
   let result=await products.updateOne(req.params,{$set:req.body});
resp.send(result);
});

app.delete("/delete/:_id",async (req,resp)=>{
    let result=await products.deleteOne(req.params);
resp.send(result);
});

app.listen(5050);