// hoisting 

/*Hoisting doesn't apply to variables declared with let or const. They must be declared before use.
Understanding hoisting helps avoid unexpected behavior and errors.
Declaring variables at the beginning of their scope is generally good practice for clarity.*/


// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello = "hello world";
// console.log(hello);


// console.log(message); // Output: undefined
// var message = "Hello";
// ---------------------------------------------------------------------------


// functions inside function 

function app() {
    function one() {
        console.log("hello my firt function");
    }

    const add = function (num1,num2) {
        return num1+num2
    }

    const mult =(num1,num2) => {
        return num1+num2
    }
    console.log("inside app");
    console.log(add(78,70));
    one()
    console.log(mult(8,8));
}

app()
