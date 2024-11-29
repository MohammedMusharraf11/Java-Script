// When an error is written to response it contains
// 1. Error Message --> res.statusMessage
// 2. Error Status   --> res.statusCode or err.status
// 3. Error Stack    --> err.stack
// 4. Any Headers   --> res.headers
// 5. Error Code    --> res.statusCode

var express = require('express');
var app = express();

app.get('/:id', function(req, res,next){
    if(req.params.id != 18){
        var err = new Error('Invalid ID');
        err.status = 404;
        next(err);
    }else {
        res.send("Everything is fine");
        next();
    }
});

app.use(function(req, res){
    console.log("Started:");
    
});

app.listen(4000);
console.log("Server Running on PORT:4000");
