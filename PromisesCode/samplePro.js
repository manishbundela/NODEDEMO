const promisesObj =new Promise((resolve,reject)=>{
    let num=10;
    if(num<10){
        resolve("less then");
    }else{
        reject("gater then");
    }
    });
    
    
    //promisesObj.then().catch().finally();
    
    promisesObj.then(
        (message)=>{
            console.log("1st_: "+message);        
        }
    ).catch(
        (message)=>{
            console.log("2st_: "+message);        
        }
    ).finally(
        ()=>{
            console.log("clean up");        
        }
    );