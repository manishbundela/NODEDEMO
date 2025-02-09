const {MongoClient} =require('mongodb');
const url='mongodb://localhost:27017';
const client=new MongoClient(url);
const dbname='e-commerce';
const collectionname='products';

async function getData(){
    let result=await client.connect(); //promise return so we are async
    let db=result.db(dbname);
    let collection=db.collection(collectionname);
    let response=await collection.find({}).toArray();
    console.log(response);
}
getData();  //Call method