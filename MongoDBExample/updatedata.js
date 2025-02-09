//if multipul records, name is same and if you're updated this record with updateone method so it will update first record only.
//but yoy're used the update method so it will update all same name records. 

const doConnection=require('./mongoDbconfig');

const updatedb=async ()=>{
const db= await doConnection();
let result =await db.updateOne(
    {name:'pravin som'},{$set:{name:'P.Somkamla',price:70.0}}
);

console.log(result);
if(result.modifiedCount>=1){
    console.log("Sucessfuly Update!");
}else{
    console.log("Not Sucessfuly Update!");
}
}
updatedb();