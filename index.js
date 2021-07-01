const http = require('http');

const server = http.createServer((req, res) => {
    console.log(res);
    res.end('Hello from the server!');
});
 
server.listen(8000, 'localhost', () => {
    console.log('Listening on port 8000')
});

