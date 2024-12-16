const {myDate,default:add,sub} = require('./test.js');

console.log("Date is: ", myDate());
console.log("Addition is: ", add(5, 6));
console.log("Subtraction is: ", sub(10,2));



//  
var assert = require('assert');
let x=5;
let y=5;

try{
    assert(x==y);
    }catch{
        console.log("Error: x is not equal to y");
        
    }
