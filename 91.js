// static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// // console.log(person1.eat());
// const info = Person.classInfo();
// console.log(person1.desc);
// console.log(info);

/*
Static Members: These are methods and properties that belong to the class itself, rather than individual instances of the class.
static Keyword: Used to define static members within a class.
Accessing Static Members: Called directly on the class name, using dot notation: ClassName.staticMember


Static members are inherited by subclasses.
They can be accessed within both static and instance methods, but static methods cannot directly access instance members without an instance reference.
They are often used for utility functions, class-level data, and creating instances with different options.


*/

class Circle {
    static PI = 3.14159; // Static property
  
    static getArea(radius) {
      return Circle.PI * radius * radius; // Accessing static property
    }
  }
  
  console.log(Circle.getArea(5)); // Output: 78.53975
  