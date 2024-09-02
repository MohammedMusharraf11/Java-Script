// Stack --> Primitive

// Heap --> Non-Primitive

let name = "Habibi"
let name2 = "Mushy"
// Here Copy will be made!!
console.log(name);
console.log(name2);

let user1 = {
    name: "Musharraf",
    id: 123
}

let user2 = user1;
user2.id = 990;
console.log(user1.id);


