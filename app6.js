const http = require('http');
const responseData = [];
const options = {
    'host': 'localhost',
    'port': '3000',
};
const request = http.get(options);

// 监听 response 事件方式
request.on('response', response => {
    response.on('data', chunk => {
        responseData.push(chunk);
    });
    response.on('end', () => {
        console.log(Buffer.concat(responseData).toString());
    })
})