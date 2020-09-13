const chlk=require('chalk');
console.log(chlk.green.inverse('hello world'));


const validator=require('validator')
const res=validator.isEmail('ishmamalikhan@gmail.com');
console.log(res ? chlk.green.inverse(res): chlk.red.inverse(res));