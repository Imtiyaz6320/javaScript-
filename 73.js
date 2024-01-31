Purpose:

/*All three methods allow you to control the this context within a function, which is crucial for understanding how functions interact with objects and their properties.

call():

Calls a function with a given this value and arguments provided individually.
Syntax: func.call(thisArg, arg1, arg2, ...)


apply():

Similar to call(), but accepts arguments as an array.
Syntax: func.apply(thisArg, [argsArray])

bind():

Creates a new function with a specific this value and optional arguments, to be called later.
Syntax: boundFunc = func.bind(thisArg, arg1, arg2, ...)

*/

function  about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {
    firstName : "harshit",
    age: 8,   
}
const user2 = {
    firstName : "mohit",
    age: 9,
    
}

// apply
// about.apply(user1, ["guitar", "bach"]);
// const func = about.bind(user2, "guitar", "bach");
// func();