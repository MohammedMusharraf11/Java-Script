var events = require("events")
var eventEmitter = new events.EventEmitter()

var list1 = function (){
    console.log("Dekh bhai mein tujhe dek raha hu");
    
}

eventEmitter.on("koi hai kya",list1)

eventEmitter.emit("koi hai kya")