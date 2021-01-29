const http = require('http')

let responseData = [];

let options = {
    'host': 'localhost',
    'port': '3000',
    'method': 'get'
};

// 发送请求
http.request(options, (response) => {
    response.on('data', chunk => {
        responseData.push(chunk)
    });
    response.on('end', () => {
        console.log(Buffer.concat(responseData).toString());
        console.log(JSON.stringify(response.headers));
    });
}).end()