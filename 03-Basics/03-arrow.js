const user = {
    username: "John Doe",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to the website`);    
        console.log(this); //--> This prints the enitre object
    }
    
}

user.welcomeMsg()
username = "THOR"
user.welcomeMsg()


// console.log(this); --> In Node this gives empty {}
// console.log(this); --> This in Browser ka console gives Window that click alert etc... 


function chai(){
    //console.log(this);  This prints many things bla bla bla
    let userName = "John-Doe"
    // console.log(this.userName); This gives undefiend as it is accessbile in  objects nly  We will learn more about it!!   
}
chai()


// Arrow Function

const newChai = ()=>{
    let username = "John"
    console.log(this.username); // Undefiend here too
    
}

newChai() // 

const addTwo = (num1,num2)=> {
    return num1 + num2
}

console.log(addTwo(3,4));

// IMPLICIT RETURN ARROW FUNCTION
//           Parameters      Return     --> When {} are used return is must but () return is not req!!
const ADD = (num1,num2) => (num1 + num2)

console.log(ADD(10,8));
