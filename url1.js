const url = require('url')

const urlString = 'http://www.test.com?orderId=12345';
const urlObject1 = url.parse(urlString);
const urlObject2 = url.parse(urlString, true);

const urlObject3 = new URL(urlString);


console.log(urlObject3);

// URL {
//     href: 'http://www.test.com/?orderId=12345',
//     origin: 'http://www.test.com',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'www.test.com',
//     hostname: 'www.test.com',
//     port: '',
//     pathname: '/',
//     search: '?orderId=12345',
//     searchParams: URLSearchParams { 'orderId' => '12345' },
//     hash: ''
//   }