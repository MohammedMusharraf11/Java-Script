//  Buffer class is used to perform operations on RAW binary data

// Array can be of any type and its resizeable
//  Buffer only deals with binary data and its fixed size

// Buffer Creation
//  1. Buffer.from()  2. Buffer.alloc()  3. Buffer.allocUnsafe()
// Buffer.allocUnsafe() is faster but it may contain some data from previous operations
// Buffer.alloc() is slower but it is safe to use and it initializes the buffer with zeros


//  Buffer.alloc(size, fill, encoding) 
//  size: size of buffer in bytes 
//  fill: value to be filled in buffer (default is 0)
//  encoding: encoding to be used (default is utf8)


//  Creation of Buffer

var ubuf = Buffer.alloc(10); // 10 bytes buffer
var abuf = new Buffer([1,2,3,4,5]); // 5 bytes buffer
var bbuf = new  Buffer('Hello World'); // 11 bytes buffer


// Wrtiting to Buffer
//  buffer.write(string, offset, length, encoding) 

var buffer = Buffer.alloc(100);
buffer.write("Assalamualaikum");

// Reading from Buffer
// buffer.toString(encoding, start, end)

console.log(buffer.toString('utf-8'));

var bufferOld = new Buffer('Hello World');
var bufferNew = bufferOld.slice(0, 5);
console.log(bufferNew.toString('utf-8'));




