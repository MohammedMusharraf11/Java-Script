function myName(){
    console.log("HEY!! This is John Doe");   
}

// myName ---> This is refrence 
myName() // ---> This is function call


function loginMsg (username){
    return `${username} just logged in!!`
}

loginMsg("John-Doe") // Gives no output 
console.log(loginMsg("John-Doe"));
console.log(loginMsg());


// Shopping Cards!!

function calculateCartPrice(...num1){ // Here ... is rest operator & it is also called as spread operator
return num1
}

console.log(calculateCartPrice(200,400,799));
