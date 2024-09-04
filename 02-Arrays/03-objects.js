// Object made from constructor is Singelton

// Object Literals

const mysym = Symbol("key1")

const Jsuser = {
    name:"Abraham",
    age: 18,
    "full name" : 'Abraham Benjamin',
    [mysym] : "This is Symbol",
    location: "Palestine",
    isLoggedIn : false,
    email: "me@gmail.com",
    lastLoginDay: ["Monday", "Friday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
// console.log(Jsuser.full name); --> This will throw error
console.log(Jsuser["full name"]);

console.log(Jsuser[mysym]);

Jsuser.email = "me@github.com" // I can change the values 

Object.freeze(Jsuser)
Jsuser.email = "me@google.com"

console.log(Jsuser);

const newUser = {
    name: "Musharraf",
    location: "India"
}

newUser.greeting = function(){
    console.log("Hello Akhi");
    }

newUser.greeting2 = function (){
    console.log(`Assalamualikum ${this.name} bhai`);
    
}

// console.log(newUser.greeting);
console.log(newUser.greeting());
console.log(newUser.greeting2());




