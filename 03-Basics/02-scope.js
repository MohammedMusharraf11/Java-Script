
if(true){
    let a =10;
    const b = 20
    var c = 20
    
}
//  console.log(a); --> Throws Error
//  console.log(b); --> Throws Error
 console.log(c); // No error 

//  **************************INTRESTING******************

console.log(addOne(5)) // This wont throw error
function addOne(num){
    return num+1
}

// addTwo(3) --> This will throw Error

const addTwo = function(num){
    return num + 2
}
addTwo(3)