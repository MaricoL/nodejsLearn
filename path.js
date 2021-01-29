const path = require('path');

// path.join ———— 拼接路径名
// __dirname ———— 获取当前文件所在路径
const outPutPath = path.join(__dirname, 'myDir', 'hello.js');
console.log(outPutPath);        // E:\nodejsLearn\myDir\hello.js

// path.extname ———— 获取文件后缀名
const extInfo = path.extname(outPutPath);
console.log(extInfo);           // .js

// path.parse ———— 将路径解析成对象
const filePath = '/Users/helloworld/node/test.js';
const obj = path.parse(filePath);
console.log(obj);
// {
//     root: '/',
//     dir: '/Users/helloworld/node',
//     base: 'test.js',
//     ext: '.js',
//     name: 'test'
// }