// Import the required modules
const fs = require('fs');
const readline = require('readline');

// Create a readable stream for the input file
const fileStream = fs.createReadStream('input.txt');

// Create an interface to read the file line by line
const rl = readline.createInterface({
  input: fileStream,
  output: process.stdout,
  terminal: false
});

// Define the changeCase function (assuming it's already available as stated)
function changeCase(str) {
  // This is a sample implementation for changeCase
  return str.split('').map(char => {
    // Example logic: toggle the case of each character
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

// Read each line, process with changeCase, and log the result
rl.on('line', (line) => {
  const transformedLine = changeCase(line);
  console.log(transformedLine);  // Write the transformed line to the console
});

// Handle end of file
rl.on('close', () => {
  console.log('File reading completed.');
});





var fileStream1 = fs.createReadStream("input.txt")

var rl1 = readline.createInterface({
    input:fileStream1,
    output: process.stdout,
    terminal:true
})

rl1.on("line",(line)=>{
    console.log(changeCase(line));
    
})

rl1.close(()=>{
    console.log("File read");
    
})