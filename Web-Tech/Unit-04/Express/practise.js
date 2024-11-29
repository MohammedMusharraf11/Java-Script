const express = require("express")

const app = express()

// The route defined first has greater priority
//  To use any method uh can use {app.all()}
app.get('/',function(req,res){
    res.send('<h2>Hello World<h2/>')
});

app.get('/',function(req,res){
   
    res.send('<h2>Bro wassup<h2/>')
});

app.post('/',function(req,res){
    
    res.send('<h2>Hello This is Post req<h2/>')
});

app.put('/',function(req,res){
    
    res.send('<h2>Hello This is Put req<h2/>')
});

app.delete('/',function(req,res){
    
    res.send('<h2>Hello This is Delete req<h2/>')
});

app.listen(3000)
console.log("Server Running on PORT:3000");

