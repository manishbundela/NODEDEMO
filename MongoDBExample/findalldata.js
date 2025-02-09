const doConnection=require('./mongoDbconfig');

/*
//All find data
const main=async ()=>{
    let data= await doConnection();
    data= await data.find().toArray();
    console.warn(data);
}
main();
*/

//selected data find
doConnection().then((resp)=>{
    resp.find({name:'Rajesh'}).toArray().then((data)=>{
        console.log(data);
    });
}).catch((error)=>{
    console.error("not db connection");
}).finally(
    ()=>{console.log("Finally work!")}
);


