// Arrays
// Arrays are reuseable

const myArr = [10,4,2,3,91,5]

const newArr = new Array(1,2,3,4,5)

// Array Methods:

// myArr.push(10)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(8) 
// console.log(myArr);
// myArr.shift()  
// console.log(myArr);

// console.log(myArr.includes(4));

// console.log(myArr.indexOf(4));

// console.log(myArr);

// const arr1 = myArr.join();

// console.log(arr1);
// console.log(typeof arr1);


// Slice , Splice 

console.log("Original Array: ", myArr);

console.log("Sliced Array: ",myArr.slice(1,3));

console.log("Original Array After Slice: ", myArr);

console.log("Spliced Array: ",myArr.splice(1,3));
console.log("Original Array After Splice: ", myArr);


