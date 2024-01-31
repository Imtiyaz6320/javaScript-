// default parameters 


// this is old methed 

// function abc(a,b) {
//     if (typeof b === "undefined" ) {
//         b = 0
//     }
//     return a+b
// }
// console.log("hello",abc(2));


// ---------------------------------------------------------

// new merthed em6 it simple defulat parameters

function addTwo(a,b=0) {
    return a+b
}

console.log(addTwo(5));