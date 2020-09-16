/// the http.createserver() method include request and response parameter which is supplied by nodejs
///the request object can be used to get information about the cureent http request e.g url request header
///and data
///the response object can be used to send a resposne for a current 





const http=require('http');
const server=http.createServer((req,res)=>{
    res.end('hello from the others side');
});
server.listen(8000,'127.0.0.1',()=>{
    console.log('listing the port number 8000')
});