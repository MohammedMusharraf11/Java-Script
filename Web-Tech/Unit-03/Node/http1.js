const http = require("http")
const url = require("url")
const fs = require("fs")

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.write("Hello India")
//     res.end()


// }).listen(8080)
// console.log("Server is listening at: http://localhost:8080 ");

http.createServer(function(req,res){
    if(req.method=='GET'){
        var myurl = url.parse(req.url)
        var pathname = myurl.pathname
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                res.writeHead(400,{'Content-type':'text/html'})
                res.write("<h1>File Not Found </h1>")
                res.end();
            }else{
                res.writeHead(200,{'Content-type':'text/html'})
                res.write(data.toString())
                res.end();

            }
        })

    }
    else{
        res.writeHead(400,{'Content-type':'text/html'})
        res.write("<h2>This is Not a get Req </h2>")
        res.end();
    }
}).listen(9090)