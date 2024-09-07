const coding = ["js", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
// console.log(item);
return item


} )

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

const filtrNums = myNums.filter( (num)=>(num>4))

console.log(filtrNums);


const newNums = []

myNums.forEach( (nums) => {
    if(nums>4){
        newNums.push(nums)
    }
})

console.log(newNums);



const Numbers = [1,2,3,4,5,6,7,8,9,10]

const fun = Numbers
            .map( (nums) => nums*10)
            .map( (nums) => nums +1)
            .filter( (nums)=>(nums>=50))
        
console.log(fun);


// Reduce 

const score = [39,28,43,69,98]

const total = score.reduce( (num1,num2)=> (num1+num2) )

console.log(total);


