//  Basic Express app
var express = require('express');

// Create a root level instance of express
var app = express();

//  -----------*****----------*****---------- 
// ROUTE Definition takes the following structure:
// app.METHOD(PATH,HANDLER)

// Define a route for the root URL
app.get('/', function(req, res) {
  res.send('Hello World!cdm fzfdddssddd/smx fsseew;r');
});
app.get('/hello', function(req, res) {
  res.send('Hello World!cdm fzfdddssddd/smx fsseew;r');
});

//  Dynamic Routing

app.get('/:msg', function(req, res) {
    res.send('The Fact is  '+req.params.msg);
    }
    );

// Request Parameters
app.get('/:srn/:name', function(req, res) {
    res.send('Student with SRN '+req.params.srn+' is '+req.params.name);
    }
    );



app.listen(9900)
console.log('Server running on port 9900');
