var http = require("http")
var url = require("url")
var fs = require("fs")
const path = require("path")

http.createServer(function(req,res){
    if(req.method=="GET"){
        var myurl = url.parse(req.url)
        var pathname = myurl.pathname
        if(pathname=='/'){
            pathname= '/index.html'
        }
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                res.writeHead(400,{'Content-type':'text/html'})
                res.write("Error Occured!!")
                res.end()
            }else{
                res.writeHead(200,{'Content-type':'text/html'})
                res.write(data);
                res.end()
            }
        })
        
    }
}).listen(8080)