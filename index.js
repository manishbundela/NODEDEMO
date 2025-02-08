
/*Export other file data*/
const app=require('./app')
console.log(app.x);
console.log(app.y);
console.log(app.z());

/*Normal print*/
console.warn("manish Demo");


/*Array used*/
const arr=[1,2,3,4,5,6,7,8,9,1,2];
let result=arr.filter((item)=>{
    return item>8;
}); 

console.log(result);
console.log("Package.json");