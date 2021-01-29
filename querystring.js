const querystring = require('querystring');

const obj = { name: 'zhangsan', age: 13 }
console.log(querystring.stringify(obj));        // name=zhangsan&age=13

const str = 'name=abc&age=20';
console.log(querystring.parse(str));            // { name: 'abc', age: '20' }