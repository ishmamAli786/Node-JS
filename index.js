const fs=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>{
//    console.log(req.url);
 if (req.url="/userApi"){
    fs.readFile(`userApi.json`,"utf-8",(err,data)=>{
        console.log(err);
        console.log(data);
        res.end();
    })
}else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("<h1> 404 error pages. page does not exist</h1>");
}
});
server.listen(8003,'127.0.0.1',()=>{
    console.log('listing the port number 8000')
});