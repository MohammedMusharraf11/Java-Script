const tinderUser = new Object()

tinderUser.id = "PES2CS915"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const obj1 = {1:'a',2: 'b'}
const obj2 = {1:'a',2: 'b'}

const mergedObj = Object.assign({},obj1,obj2)

console.log(mergedObj);

// Same thing can be done using spread!!

const obj3 = {
    ...obj1,...obj2
}

console.log(obj3);

console.log(Object.keys(tinderUser)); // --> Returns array which contains keys
console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));


// Object destruction:

const {name: naam} = tinderUser // Now i can use just name or naam rather then using tinderUser.name!!

console.log(naam);

