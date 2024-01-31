// Object

// difference between dot and bracket notaion

 const person = {
    name : 'imtiyaz',
    age : 25,
    work : "devlaper",
    "persone hobbies" : ["play video game", "watch move", "using Instagaram"],   // 2 word k space hai issliya " " used hua hai 
    number :[23,32,434,4334,3423,34,343,2342,23423,234,2,342,34,34324]
 } 

//  let key = 'Email'

//  console.log(person); 
//  console.log(person.number);
//  console.log(person["persone hobbies"]); // aise call karge

// //  add new extrnal data add obj
// person["key"] = 'imtiyaz6320@gmail.com'
// console.log(person);


// --------------------------------------------------------------------------------------------------------------------


// how to iterate object 
// for in loop 
// Object.keys 

// for (const key in person) {
//     console.log(`${key} : ${person[key]}`);
//     // console.log(key, " : " ,person[key]);
// }

// console.log(typeof(Object.keys(person)));
// console.log(Object.keys(person));
// let val = Array.isArray(Object.keys(person))
// console.log(val);

for (const key in Object.keys(person)) {
    // console.log(person[key]);
    
}




