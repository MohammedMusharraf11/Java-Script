var http = require('http');
const path = require('path');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World Musharraf")
    res.write(req.url);
    res.end();
}).listen(3001);
console.log('Server running at http://localhost:3001/');

//  URL module
var url = require('url');
var adr = 'http://localhost:3001/default.htm?year=2017&month=february';

// Important 
var q = url.parse(adr,true);
console.log(q.host); //returns 'localhost:3001'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
console.log(q.query); //returns an object: { year: 2017, month: 'february' }
console.log(q.query.year); //returns 2017


// Web Client 
var options = {
    host: 'localhost',
    port: 3001,
    path: '/default.htm'
};

var callback = function(response) {
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        console.log(body);
    });
}

var req = http.request(options, callback);
req.end();






