var express = require('express');
var upload = require('express-fileupload');

var app = express();
// Mount this shitt
app.use(upload());

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req,res) =>{
    if(req.files){
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
        console.log(filename);
        res.send("File Uploaded Successfully")
    }
});

app.listen(8080);
console.log('Server Running on PORT:8080');
        
        

