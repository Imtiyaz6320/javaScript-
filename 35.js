// array destructuring 
const myArray = ["value1", "value2", "value3","value4","value5", "value6", "value7","value8"];

// let v1 = myArray[0]
// let v2 = myArray[1]
// let v3 = myArray[2]
// console.log(v1);
// console.log(v2);
// console.log(v3);

// itis old long code write

let [v1,v2,v3,...myNewAllArr ] = myArray
console.log(v1);
console.log(v2);
console.log(v3);
console.log(myNewAllArr);
