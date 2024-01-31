
// const user = {
//     fastName :'imtiayaz',
//     lastName :'Hussain',
//     age :26, 
//     addres :"house, clone, village, city, state",
//     about : function() {
//         console.log(`hello myname ${this.fastName} ${this.lastName} and age ${this.age} addresh ${this.addres}`);
//     },
//     is18: function () {
//         return this.age >=18;
//     }
// }

// user.about()
// const result = user.is18();
// console.log(result); // This will output: true

// simple way to Write 


// function (that function create object)
// 2.) add key value pair 
// 3.) object ko return krega 


// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 19, "my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about);

// aur simple 

// bar bar methed call karna parta tha 
// isliya isko alge obj main rakta tab usaka Reference kaam ho jata hai 

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());