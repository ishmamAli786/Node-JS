var http=require('http');
var page=`<input type="text"> <input type="text"> <input type="text"> <input type="text">`
http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(page)
    res.end()
}).listen(4005)