var fs=require('fs');
// fs.mkdir('ali',(err)=>{
//     console.log('folder created');
// })


// fs.writeFile('ali/new.txt','my name is ishmam ali khan',(err)=>{
//     console.log(err);
//     console.log('file created successfully');
// });


// fs.appendFile('ali/new.txt','is a web developer',(err)=>{
//     console.log('err');
//     console.log('append data successfully');
// })


// fs.readFile('ali/new.txt','utf-8',(err,data)=>{
//     console.log(err);
//     console.log(data);
// })



// fs.rename('ali/new.txt','ali/mynew.txt',(err)=>{
//     console.log(err);
//     console.log('rename successfully');
// })


// fs.unlink('ali/mynew.txt',(err)=>{
//     console.log(err);
//     console.log('data removed successfully')
// })
fs.rmdir('ishmam',(err)=>{
    console.log('err');
    console.log('delete data successfully');
})