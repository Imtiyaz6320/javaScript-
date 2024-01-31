function hello(){
    console.log("hello world");
}
// javascript function ===> function  + object
//  JS Mai kuch propaty hota hai ex name ya fuction naam bata hai
console.log(hello.name);

// ham log khud ka propaty bann sakta HAI 
// you can add your own properties 

hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);


// name property ---> tells function name;
// function provides more usefull properties.
// koi bhi funcion {} obj data hai ham log value add bhi kar sakta hai 

console.log(hello.prototype); // {}

// only functions provide prototype property


hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());