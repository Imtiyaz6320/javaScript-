// new keyword 
// 1.) this = {}
// 2.) return {} 
//

// __proto__ 
// // official ecmascript document
// [[prototype]]

// constructor function 
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());


/*Used to create new instances of objects from constructor functions.
It's a fundamental concept in JavaScript's prototype-based object model.

While JavaScript supports classes (introduced in ES6), they are essentially syntactic sugar for constructor functions and prototypes. The new keyword is still used to create instances of classes.
The new keyword is not strictly required to create objects, but it's the most common and recommended way to create objects with inheritance and proper this binding.
It's important to understand the prototype chain and inheritance when working with the new keyword.


function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30); // Creates a new Person object
*/