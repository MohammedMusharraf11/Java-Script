var express = require('express');
var upload = require('express-fileupload');
var app = express();

app.use(upload());

// Serve the HTML file
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/reviseIndex.html');
});

// Handle file upload
app.post('/', function(req, res) {
    if (req.files && req.files.file) {
        var file = req.files.file;
        var name = file.name;
        console.log('File uploaded:', name);
        res.send('File uploaded successfully: ' + name);
    } else {
        res.status(400).send('No file uploaded');
    }
});

// Start the server
app.listen(8080, function() {
    console.log('Server running on http://localhost:8080');
});
