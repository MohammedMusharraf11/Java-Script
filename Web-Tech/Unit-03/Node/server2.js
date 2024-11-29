var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    if(req.method=='GET'){
        var myurl = url.parse(req.url,true);
        var pathname = myurl.pathname
        fs.readFile(pathname.substr(1), function(err,data){
            if(err){
                res.writeHead(200,{"Content-type":"text/html"})
                res.write("<h1>File Not Found </h2>");
                res.end();
            }else{
                res.writeHead(200,{"Content-type":"text/html"});
                res.write(data);
                res.end();
            }
        });
        
    }
}).listen(8888);
console.log("Server Listening at http://localhost:8888");

