var http= require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'application\json'})
    res.write("{name:'ishmam ali khan'}");
    res.end();
}).listen(4001);