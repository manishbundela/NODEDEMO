const doConnection=require('./mongoDbconfig');

const insertdb=async ()=>{
const db=await doConnection();
//insert single data
//const result= await db.insertOne({name:'parkash',brand:'PNB',price:70.0,category:'manager'}); //return promise
const result= await db.insertMany([
    {name:'pravin som',brand:'Amazon',price:60.0,category:'manager'},
    {name:'jitu',brand:'HDBF',price:75.0,category:'manager'},
    {name:'hement',brand:'IBM',price:65.0,category:'manager'}
]); //multipul data insert

//console.log(result);
if(result.acknowledged){
    console.log('Suceesfully inserted!');
}else{
    console.log('Not insert Record!')
}
}
insertdb();