var http = require("http")
var url = require("url")
var fs = require("fs")
var qs = require("querystring")

http.createServer(function(req,res){
    if(req.method=="GET"){
        var myurl = url.parse(req.url)
        var pathname = myurl.pathname
        if(pathname=='/'){
            pathname='/index.html'
        }
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                res.writeHead(400,{'Content-type':'text/html'})
                res.write("<h1>File Not Found </h1>")
                res.end();
            }else{
                res.writeHead(200,{'Content-type':'text/html'});
                var obj = JSON.parse(data)
                var query = qs.parse(req.query)
                if(obj.srn==query.srn){
                    res.write("<h2>Welcome </h2>")
                    res.end()
                }
            }
        })

    }

}).listen(4040)
console.log("http://localhost:4040");
