var http=require('http');
http.createServer((req,res)=>{
    res.write('Hello from node js Server');
    res.end()
}).listen(5000)



var sum=function (a,b){
    return a+b;
}
// console.log(sum(10,20))
function complexExmp(sum){
    console.log(sum(200,300))
}
complexExmp(sum)