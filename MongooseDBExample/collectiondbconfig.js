const mongoose=require('mongoose');
const collectionname= 'products';

/*set fixed schema*/
const ProductsSchema=new mongoose.Schema({
           name:String,
           brand:String,
           price:Number,
           category:String
}); 

module.exports=mongoose.model(collectionname,ProductsSchema);