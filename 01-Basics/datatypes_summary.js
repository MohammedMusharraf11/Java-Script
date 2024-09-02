// Primitive 
// 7 Types: String, Number,  Boolean, null, Symbol, BigInt, Undefined 

// Dynamically Typed Language

const score = 100;
const scoreValue = 100.3;   // Number only

const id = Symbol('123');
const newId = Symbol('123');

console.log(id===newId);

//  Reference [Non-Primitive]
// Array , Object , Function

const heros = ["Thor", "Iron-Man", "Hulk"]

let myObj = {
    name: "John-Doe",
    country : "India"
}

const myFunction = function(){
    console.log("Hello World!!")
}

myFunction();