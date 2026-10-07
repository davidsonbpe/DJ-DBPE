const http = require('http');
const fs = require('fs');
const contents = fs.readFileSync('index.html');
http.createServer((req, res) => {
    res.end(contents);
}).listen(7500);
