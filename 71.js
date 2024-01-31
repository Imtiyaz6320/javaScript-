// methods
// function inside object


// main part this is calling a object
const person = {
    firstName : "harsh",
    age: 8,
    about: function personInfo(){
        console.log(`my name is ${this.firstName} and my age ${this.age}`);
    },
}
 
person.about()

function personInfo(){
    console.log(`my name is ${this.firstName} and my age ${this.age}`);
}
const person1 = {
    firstName : "imtiyaz",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "imo",
    age: 8,
    about: personInfo
}
const person3 = {
    firstName : "hussain",
    age: 8,
    about: personInfo
}

person1.about()
person2.about()
person3.about()

// console.log(window);
// "use strict";
// function myFunc(){
    
//     console.log(this);
// }
// myFunc();