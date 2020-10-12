var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'connect'
})
con.connect((error)=>{
if(error) throw error;
else{
    con.query('select * from student',(err,result)=>{
        if(err) throw err;
        else{
            console.log('all result are here',result)
        }
    })
}
})