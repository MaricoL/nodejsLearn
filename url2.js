const url = require('url')
const urlObject = {
    'protocol': 'http',
    'host': 'localhost',
    'port': '3000',
    'pathname': '/abc',
    'search': '?orderId=12345'
}

let address = url.format(urlObject);

console.log(address);       // http://localhost/abc?orderId=12345