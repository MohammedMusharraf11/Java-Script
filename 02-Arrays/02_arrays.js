const marvel_heros = ['Thor','Iron-Man','Hulk']

const dc_heros= ['Superman','Batman', 'Flash']

marvel_heros.push(dc_heros)

// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)

// console.log(all_heros);>>

const arr1 = [1,2,3[5,6,7[8,6,7]], 3,5,7,[6,10,[5,7]]]

const arr2 = arr1.flat(Infinity)

console.log(arr2);

// Used in Scrapping

console.log(Array.isArray("John-Doe"));

console.log(Array.from("John-Doe"));

console.log(Array.from({name:"JohnDoe"})); // Interview !!

