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

var ubuf = Buffer.alloc(20);
ubuf.write("PES University")
console.log(ubuf.toString('utf-8'));
 // 10 bytes buffer
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

var alpha = Buffer.alloc(26)

for(var i=0; i<26;i++){
    alpha[i] = i+ 65;
}

console.log(alpha.toString('ascii',24));

const buf1=Buffer.alloc(20,'Pes University');
const buf2=Buffer.alloc(12,'Hi welcome');
var result=buf1.compare(buf2);
if(result<0)
{
    console.log(buf1+ " comes before"+ buf2);
 }
 else if(result===0)
 {
     console.log(buf1+ " is same as "+buf2);
 }
 else
 {
     console.log(buf1+" comes after "+buf2);
 }


// A program reads the enitre fill in a single GO all at once 
// Where as Streams ready in chunks of data piece 
// By this it doesn't keep the entire content in memory
// Example YT and Netlflix

// Why Streams?
//  * Memory Efficiency:
//  * Time Efficiency: 

// Types of Streams:
// There are 4 types of streams in Node.js:
// Writable: streams to which we can write data. For example, fs.createWriteStream() lets us write data to a file using streams.
// Readable: streams from which data can be read. For example: fs.createReadStream() lets us read the contents of a file.
// Duplex: streams that are both Readable and Writable. For example, net.Socket
// Transform: streams that can modify or transform the data as it is written and read. For example, in the instance of file-compression, you can write compressed data and read decompressed data to and from a file.
// In HTTP server, request is a readable stream and response is a writable stream.


