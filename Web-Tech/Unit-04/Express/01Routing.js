const express = require("express")

const app = express()

// ROUTE Definition takes the following structure:
// app.METHOD(PATH,HANDLER)
// Where --> app is an instance of express
// METHOD is an HTTP request method [GET, POST, PUT, DELETE, etc.]
// PATH is a path on the server
// HANDLER is the function executed when the route is matched

//  -----------------*****-----------------*****-----------------

app.get('/',function(req,res){
    res.send('<h2>Hello World<h2/>')
    // Types of req objects
    // req.params
    console.log('req.params:', req.params);
    
    // req.body
    console.log('req.body:', req.body);
    
    // req.query
    console.log('req.query:', req.query);
    
    // req.header
    console.log('req.header:', req.headers);
    
    // req.path
    console.log('req.path:', req.path);
    
    // req.url
    console.log('req.url:', req.url);
    
});


app.get('/res',function(req,res){
    
    res.status(200).send('Hello World').json({msg: 'Hello World'})
    // Types of Response objects
    // res.send() --> Sends the HTTP response
    res.send('<h2>Bro wassup<h2/>')
    // res.json() --> Sends a JSON response
    res.json({msg: 'Hello World'})
    // res.sendFile() --> Sends a file as an octet stream
    res.sendFile('path/to/file')
    // res.sendStatus() --> Sends a status code
    res.sendStatus(200)
    // res.status() --> Sets the status code
    res.status(200).send('Hello World')

});

app.listen(3000)
console.log("Server Running on PORT:3000");