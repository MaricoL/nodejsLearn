const http = require('http')
const httpServer = http.createServer((request, response) => {
    let data = ''
    // 监听 data 事件，当请求传送数据过来时
    request.on('data', (chunk) => {
        console.log(chunk);
        data += chunk
    })

    // 监听 end 事件，当请求结束时
    request.on('end', function () {
        let method = request.method;
        let headers = JSON.stringify(request.headers);
        let httpVersion = request.httpVersion;
        let url = request.url;
        let responseData = `${method}<br>${headers}<br>${httpVersion}<br>${url}<br>${data}<br>`;

        response.writeHead(200, { 'Content-type': 'text/html' })
        response.end(responseData)
    })
})

httpServer.listen(3000, () => {
    console.log('Node Server started on port 3000');
})