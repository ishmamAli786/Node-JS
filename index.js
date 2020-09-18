const bioData={
    name: "ishmam",
    age:26
}
console.log(bioData.age)
// 1.convert into json
const jsonData= JSON.stringify(bioData);
// const objData=JSON.parse(jsonData);
// console.log(objData)
// 2.add into other file
const fs=require('fs');
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(err);
    console.log('done');
})
// 3.read file
fs.readFile('json1.json',"utf-8",(err,data)=>{
    console.log(err);
    console.log(data)
})
// 4.convert back to object
const objData=JSON.parse(jsonData);
console.log(objData)
