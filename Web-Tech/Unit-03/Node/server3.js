var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    if(req.method=='GET'){
        var myurl = url.parse(req.url)
        var pathname = myurl.pathname
        if(pathname== '/'){
            pathname = '/index.html'
        }
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                res.writeHead(400,{'Content-Type':'text/html'});
                res.write('<h2> No file found </h2>')
                res.end()
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end()
                
            }
        })
    }





}).listen(9999)
console.log("Server Started at http://localhost:9999");
