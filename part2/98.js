// closures



// function can return functions

// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world")
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans();


function printFullName(firstName, lastName){  //parent
    function printName(){                   // chiled 
        console.log(firstName, lastName);
    }
    return printName;   // call chiled 
}

const ans = printFullName("imtiyaz", "hussain");  // yaha par firstName, lastName  bhi aya 
// console.log(ans);
ans();


// closurs prant function k sath chiled ka propaty automatic aata hai issliya 
// is ko bola ta hai