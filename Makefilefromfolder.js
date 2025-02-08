//Makefilefromfolder.js

const fs=require('fs');
//create single file
//fs.writeFileSync('apple.txt','this is apple file'); 

const path=require('path');
const dirPath=path.join(__dirname); //Current dir name
console.warn(dirPath);


//create multipul file in files folder
const dirPath1=path.join(__dirname,'files'); // get files folder
//console.warn(dirPath1);
for(i=0;i<=5;i++){
    fs.writeFileSync(dirPath1+"/apple_"+i+".txt",[i]+"_count file!");
}

//show file in folder
fs.readdir(dirPath1,(arr,files)=>{
    console.warn(files);
    files.forEach((files)=>{
        console.log(files);
    })
});

//read file.
