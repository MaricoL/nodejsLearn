const http = require('http');
const url = require('url');
const querystring = require('querystring');
const userService = require('./UserService');

const receivedData = [];

http.createServer((request, response) => {
    request.on('data', chunk => {
        receivedData.push(chunk);
    })
    request.on('end', () => {
        const { url: requestUrl, method: requestMethod } = request;
        if (requestUrl.includes('login') && requestMethod === 'GET') {
            const urlObj = url.parse(requestUrl);
            const queryObj = querystring.parse(urlObj.query);
            const result = userService.login(queryObj.username, queryObj.password);

            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(`Login ${result} !!!Username:${queryObj.username}---password:${queryObj.password}`)
        }

    })
}).listen(3000, () => {
    'Server started on port 3000'
})