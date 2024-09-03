let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let newDate = new Date(2023,0,11)

console.log(newDate);

let new1 = new Date(2023,0,11,5,30)
console.log(new1.toLocaleDateString);

let India = new Date("01-11-2024") // MM/DD/YYYY

console.log(India.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

// ---> Month starts from 0 

let today = new Date()

console.log(today.getMonth()+1);

today.toLocaleString('default',{
    weekday: "long",
    
})  // Learn More about this!!




