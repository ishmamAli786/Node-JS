// const name="ishmam";
// console.log(name);
const fs=require("fs");
fs.writeFileSync('read.txt','web developer');
fs.writeFileSync('read.txt','ishmam ali khan web developer');
fs.appendFileSync('read.txt','how are you i am fine thank you');
fs.readFileSync('read.txt');
const data=fs.readFileSync('read.txt');
// console.log(data);
org_data=data.toString();
console.log(org_data);
