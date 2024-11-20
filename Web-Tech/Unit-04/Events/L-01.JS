//  Node JS: Is asynchronous and its mono-threaded. Its based on Event-Driven Architecture.

// Event Emitters
// An Event Emitter is an object that can emit (or trigger) events. In Node.js, the EventEmitter class from the events module is used to handle events. When an event is emitted, any functions (listeners) that are registered to handle that event are called synchronously.

// Example
const events = require('events');
//  Creation of Object
const eventEmitter = new events.EventEmitter();

// Methods:
// 1. on(eventName, listener) - Adds a listener to the end of the listeners array for the specified event.
// 2.addListener(eventName, listener) - Adds a listener to the end of the listeners array for the specified event.


// 3. emit(eventName, [arg1], [arg2], [...]) - This method is used to trigger or fire the event with the given arguments.

// Class Methods:
// 1. listenerCount(eventName) - Returns the number of listeners for the specified event.

//  Create a listener-1

var list1 = function listener1() {
    console.log('listener 1 executed.');
}

// Create a listener-2
var list2 = function listener2() {
    console.log('listener 2 executed.');
}

//  Binding/Subscribing/Raising/Ataching the event with the listener

eventEmitter.addListener("connection", list1);
eventEmitter.on("connection", list2);

// Fire the connection event
eventEmitter.emit("connection");

// Count the number of listeners
console.log(eventEmitter.listenerCount("connection"));  

//  Remove the listener-1
eventEmitter.removeListener("connection", list1);
console.log("Listener-1 is removed.");

// Fire the connection event again
eventEmitter.emit("connection");

// Console the number of listeners
console.log("Listeners after removal: ",eventEmitter.listenerCount("connection"));