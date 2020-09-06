///  challenge time

/// create a folder with  the name of 
/// create a file with the name of bio.txt and data into it
/// add more data into the file at the end of the excistence
/// read the data without getting the buffer data at first
/// file encoding
/// rename the file name to mybio.txt
/// now delete both the file and the folder



const fs=require("fs");
// fs.mkdirSync("ishmam");



// fs.writeFileSync('bio.txt',"ishmam ali khan is best web developer");
// fs.appendFileSync('bio.txt','web developer');



// const read=fs.readFileSync('bio.txt',"utf-8");
// console.log(read);



// fs.renameSync('bio.txt','mybio.txt');




fs.unlinkSync('mybio.txt');