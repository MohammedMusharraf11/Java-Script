const name = "John"
const count = 100

console.log(`Hello peeps my name is ${name} and my repo count is ${count}`);

const myName = new String('Abraham')

console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('h'));

const newString = myName.substring(0,4);  // No negative Values

console.log(newString);

const slicedString = myName.slice(-1,3);

console.log(slicedString);

const spacedString = "      Musharraf    "

console.log(spacedString.trim());

console.log(myName.replace('h','XY'));






