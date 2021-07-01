const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end('This is overview.');
    } else if (pathName === '/product') {
        res.end('This is product.');
    } else {
        res.writeHead(404, { 
            'Content-Type': 'text/html',
            'my-custom-header': 'anything-for-value'
        });
        res.end('<h1>Route not found.</h1>');
    }
});
 
server.listen(8000, 'localhost', () => {
    console.log('Listening on port 8000')
});

