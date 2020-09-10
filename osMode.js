let os=require('os');
console.log(os.arch());
let freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);
let totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`);