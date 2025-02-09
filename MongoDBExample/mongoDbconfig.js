const { response } = require('express');
const {MongoClient, MongoRuntimeError} =require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dbname='e-commerce';
const collectionname='products';


async function doConnection(){
        let result=await client.connect(); //promise return so we are async
        let db=result.db(dbname);
        return db.collection(collectionname);   
}

module.exports=doConnection;



/*
getCollection(collectionname).then((response)=>{
    response.find().toArray().then((data)=>{
        console.log(data);
    });
});
*/