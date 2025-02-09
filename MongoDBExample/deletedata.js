//in delete,update , In multipul same records, so it will delete and update/delete first reoced in updateone & deleteone method. 
//deleteMany :- it will delete all
//in update/delete:- if record is not avilable in db. so it will not given any error.
 
const doConnection=require('./mongoDbconfig');

const deletedb=async ()=>{
    const db= await doConnection();
    const result= await db.deleteMany(
        {name:'hement'}
    ); 
    //console.log(result);
    if(result.deletedCount>=1){
        console.log("Successfully Delete Record:: "+result.deletedCount);
    }else{
        console.log('Not Sccessfully Deleted');
    }
}

deletedb();