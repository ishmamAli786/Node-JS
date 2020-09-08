////////// comparing synchronas and Async


const fs=require("fs");
// const data=fs.readFileSync('read.txt',"utf-8");
// console.log("after the data");
// console.log(data);


fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
    console.log(err);
    
})
console.log('after the data');



