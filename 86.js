// class keyword

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`;
// };
// CreateUser.prototype.is18 = function (){
//     return this.age >= 18; 
// }
// CreateUser.prototype.sing = function (){
//     return "la la la la ";
// }

// ya itan jo code hai usko ham class function sa lika skata hai woh simple hota hai 

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName =firstName
        this.lastName = lastName
        this.email = email
        this.age = age
        this.address = address
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18; 
    }
    sing(){
        return "la la la la ";
    }
}

const user1 =  new CreateUser("imtiyaz","hussain","imtiyaz6320@outlook.com","19","bihar bjopur");

// Call the sing() method for user1
const singingResult = user1.sing();

// Display the result
console.log(singingResult); // Outputs: "la la la la"