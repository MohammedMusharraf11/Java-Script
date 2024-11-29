var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Set the view engine to Pug and specify the views folder
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to render the form
app.get('/', function(req, res) {
    res.render('form');
});

// Route to handle form submission
app.post('/submit', function(req, res) {
    console.log('Form Data:', req.body);
    res.send('Data Received');
});

// Start the server
var PORT = 3000;
app.listen(PORT, function() {
    console.log(`Server running on PORT: ${PORT}`);
});
