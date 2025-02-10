//npm install mongoose
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/e-commerce';
const collectionname='products';

//save one records
const main=async ()=>{
   await mongoose.connect(url);
    /*set fixed schema*/
   const ProductsSchema=new mongoose.Schema({
        name:String  
   }); 
const ProductsModel= mongoose.model(collectionname,ProductsSchema);
    /*set fixed schema value*/
let data = new ProductsModel({
        name:"mongoose1"
    });
let result = await data.save();
console.log(result);   
}

main(); 


//Save more record
const morerecord=async ()=>{
    await mongoose.connect(url);
    const ProductsSchema=new mongoose.Schema({
         name:String,
         price:Number
    });
 const ProductsModel= mongoose.model(collectionname,ProductsSchema);
 let data = new ProductsModel({
        name:"mongoose3",
        price:60.0
        });
 let result = await data.save();
 console.log(result);   
 }
 morerecord(); 