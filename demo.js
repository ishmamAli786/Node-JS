// var other=require('./other');
// console.log(other(10,20));


var http=require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'application\json'})
    res.write('{"name":"ishmam"}');
    res.end()
}).listen(4001)