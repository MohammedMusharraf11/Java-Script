var fs = require('fs');

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync("input.txt");
console.log("Synchronous read: " + data.toString());

// Syntax of File Open 
// fs.open(path, flags[, mode], callback)
// path: It is the path of the file.
// flags: It is the flag indicates the behavior of the file to be opened. It is a string.
// mode: It sets the file mode (permission and sticky bits), but it is optional.
// callback: It is the callback function that gets two arguments err and fd.

// Ayhchronous - Opening File
fs.open('input.txt','r+',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("File Data: "+data.toString());
    console.log("File opened successfully!");
})



fs.writeFile('input.txt', "Mohammed Musharraf", function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully!");
    console.log("Let's read newly written data");
    fs.readFile('input.txt', function(err,data){
        if(err){
            return console.error(err);
        }
        console.log("Newly written data: "+data.toString());
    });
});


fs.unlink('input.txt', function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("File deleted successfully!");
}
);