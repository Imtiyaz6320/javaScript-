// getter and setters 
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);
// person1.fullName = "mohit vashistha";
// console.log(person1);


/* 
Getters and setters provide a way to control how properties of an object are accessed and modified.
They act as special methods that intercept property access and allow you to perform custom logic before returning or setting values.

Validation: Ensure data integrity by validating values before setting them.
Derived Values: Calculate values based on other properties or logic.
Read-Only Properties: Create properties that can be accessed but not directly modified.
Observability: Track property changes for debugging or implementing reactive patterns.
Private Data Handling: Manage internal state while exposing a public API.
*/

class Person {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }
  
    get fullName() {
      return this._firstName + " " + this._lastName;
    }
  
    set fullName(newName) {
      const names = newName.split(" ");
      this._firstName = names[0];
      this._lastName = names[1];
    }
  }
  