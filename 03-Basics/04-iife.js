//  Immediatately Invoked Function Expression [IIFE]

// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

(function connect () {
    // Named iife 
    console.log("DB CONNECTED");
})(); // Semi colon is important!! 

// This is evoked as soon as object is called


// If want to use two IIFE'S then make sure you end the previous iife with SEMI-COLON


( (name) => {
    // Nmaeless IIFE
    console.log(`DB CONNECTED TO ${name}`);   
}) ('Musharraf');


