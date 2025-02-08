//AsnchrDrowbackSolve.js

let a=10;
let b=0;

let waitingdata=new Promise((resolve,reject)=>{
   
    setTimeout(()=>{
        b=20;
        resolve(b);
    });
});


waitingdata.then((data)=>{
    b=data;
    console.log(a+b);
});