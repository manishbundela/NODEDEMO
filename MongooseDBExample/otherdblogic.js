//otherdblogic.js
const mongoose=require('mongoose');
const url='mongodb://localhost:27017/e-commerce';
const collectionname='products';

mongoose.connect(url);
/*set fixed schema*/
const ProductsSchema=new mongoose.Schema({
           name:String,
           brand:String,
           price:Number,
           category:String
}); 

const insertdata=async ()=>{
    const ProductsModel= mongoose.model(collectionname,ProductsSchema);   
    let data=await new ProductsModel({
        name:"mongoose30",
        price:60.0
    }).save();
    console.log(data);
}
insertdata();


//other way for insert
const insertdata2=async ()=>{
    const ProductsModel= mongoose.model(collectionname,ProductsSchema);   
    let data= await ProductsModel.insertOne({
        name:"mongoose30",
        price:60.0
    });
    console.log(data._id);
}
insertdata2();

const updatedata=async ()=>{
    const ProductsModel= mongoose.model(collectionname,ProductsSchema);
    let data=await ProductsModel.updateOne(
        {name:'mongoose30'},
        {$set:{brand:'HPP',price:10.0}}
    );
    console.log(data.modifiedCount);
}
updatedata();


const deletedata=async ()=>{
    const ProductsModel= mongoose.model(collectionname,ProductsSchema);
    let data=await ProductsModel.deleteMany(
        {name:'mongoose30'}
    );
    console.log(data.deletedCount);
}
deletedata();


