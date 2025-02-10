const os=require('os');
//console.log(os); //diplay all os info

console.log(os.arch()); //32,64
console.log(os.freemem()/(1024*1024*1024));
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());