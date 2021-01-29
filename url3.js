const url = require('url');

const urlString = url.resolve('http://www.abc.com', 'order1');

console.log(urlString);     // http://www.abc.com/order1