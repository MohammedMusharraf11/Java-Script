//  A middleware function takes three arguments: req, res, and next.

// They have access to:
// The request object (req)
// The response object (res)
// The next middleware function in the application’s request-response cycle (next)

// Middleware functions can perform the following tasks:
// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

// TYPES OF MIDDLEWARE
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

// Application-level middleware
// Bind application-level middleware to an instance of the 
// `**app object**` by using app.use() and app.METHOD() methods, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  console.log("Started:");

  next();
});

app.get('/', function(req, res, next) {
  res.send('Hello World!');
  next();
});

app.use('/',function(req, res) {
  console.log("Ended");

});

app.listen(3000);
console.log("Server Running on PORT:3000");