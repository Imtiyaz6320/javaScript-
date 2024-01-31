/*Inner functions "remember" variables from their outer scopes.
Variables declared inside a function are only accessible within that function.
This allows for "closures" where functions remember their context even after they're called.
Mention that let and const follow lexical scope more strictly than var
*/

const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }


    console.log(myVar);
    myFunc();
}

myApp();

// ----------------------------------------------------------------------------------------------
// block scope vs function scope 


// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

function myApp(){
    if(true){
        var firstName = "harshit";
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();

