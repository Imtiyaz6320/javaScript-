// callback functions 

function myfun2(name) {
    console.log("hello i am function two ");
    console.log(`hello imtiaz ${name}`);
}

function myfun(callback) {
    console.log("hello i am function one");
    callback("im")
}

myfun(myfun2)

/* Functions passed as arguments to other functions.
Executed after a specific event or task completes.
Essential for handling asynchronous operations and customizing behavior.


Common Use Cases:

Event handling (user interactions, DOM events).
Asynchronous operations (network requests, file I/O).
Timers (delaying actions, animations).
Error handling (providing custom error handling logic).


*/