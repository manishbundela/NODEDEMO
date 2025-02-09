const express= require('express');
const dbConnection=require('./mongoDbconfig');
const mongodb=require('mongodb') //used for delete based on ID..
const app=express();
 

app.use(express.json()); //used this Middleware for read json body after express 4.6

//standed way, put method used for update..
app.put("/update",async (req,resp)=>{
    const db=await dbConnection();
   // let result = await db.updateOne({name:'P.more'},{$set:{brand: 'Apxol',price: 30}});
    let result = await db.updateOne({name:req.body.name},{$set:req.body});
    if(result.modifiedCount>=1){
        resp.send('Sucessfully Update');
    }else {
        resp.send('No sucuessfully update');
    }
});

// update on params bases
//http://localhost:5050/update2/P.more
app.put("/update2/:name",async (req,resp)=>{
    const db=await dbConnection();
   // let result = await db.updateOne({name:'P.more'},{$set:{brand: 'Apxol',price: 30}});
    let result = await db.updateOne({name:req.params.name},{$set:req.body});
    if(result.modifiedCount>=1){
        resp.send('Sucessfully Update');
    }else {
        resp.send('No sucuessfully update');
    }
});

// delete on id bases
//http://localhost:5050/id
app.delete("/:id",async (req,resp)=>{
    const db=await dbConnection();
    let result= await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    if(result.deletedCount>=1){
        resp.send('Successfully Deleted');
    }else{
        resp.send('Not Successfully Deleted');
    }
});

app.listen(5050);
