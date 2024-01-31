// super 
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
} 
// object / instance 
const tommy = new Dog("tommy", 3,45);
console.log(tommy.run());


/*
Accesses properties and methods from the parent class (also known as the superclass) within a child class.
It's essential for code reuse and inheritance in object-oriented programming.

super can only be used within a class that extends another class.
It must be used before this within a constructor, as this won't be properly bound until the parent constructor is called.
It can be used to access both static and instance properties and methods of the parent class.
It's not limited to constructors and methods; it can also be used in getters, setters, and class fields.
*/