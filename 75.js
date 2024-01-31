const obj = {
    firstName: 'imtiyaz',
    age: 34,
    abute: () => {
        console.log(`my first name ${obj.firstName} and age ${obj.age}`);
    }
};

obj.abute();


// arrow functions 

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about(){
//         console.log(this.firstName, this.age);
//     }   
// }



user1.about();