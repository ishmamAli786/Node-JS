const fs=require("fs");
fs.writeFile('read.txt','today is awesome day',(err)=>{
    console.log('file is created');
    console.log(err);
});


// we pass them a funcion as an argument -a callback
// that gets called when that task complete
// the call has an argument that tells your whether
// the operation completed successfully
// now we need to say what to do when fs.writeFile
// has completed (even if it's nothing) and start
// checking for errors



fs.appendFile('read.txt','ishmam ali khan',(err)=>{
    console.log(err);
});




fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(err);
    console.log(data);
});