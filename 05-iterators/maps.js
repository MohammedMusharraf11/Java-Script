//  Maps contain Unique obejcts
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('PAK', "Paistan")

console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-",value);
    
}


const myObject = {
    "game1" : "NFS",
    "game2" : "GTA"
}
// for (const [key,value] of myObject) {
//     console.log(key, ":-",value);
    
// } --> This Won't work for Objects

