const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3",
//     key4: "value4"
// }


console.log(obj1.key2);
// console.log(obj2.key2); //undefined

// yahi issue aa raha tha 

const obj2 = Object.create(obj1); // there is one more way to create empty object
obj2.key3 = "value3",
obj2.key4 = "value4"

console.log(obj2.key4);

console.log(obj2.__proto__);

// offical ecmascript documentation 
// [[prototype]]

// __proto__ , [[prototype]]

// prototype 