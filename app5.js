const http = require('http')

let responseData = [];

let options = {
    'host': 'localhost',
    'port': '3000',
};

// http.get() 发送 GET 请求
// 回调函数方式
http.get(options, (response) => {
    response.on('data', chunk => {
        responseData.push(chunk)
    });
    response.on('end', () => {
        console.log(Buffer.concat(responseData).toString());
        console.log(JSON.stringify(response.headers));
    });
}).end()