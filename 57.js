// map method 
const numbers = [3,4,6,1,8];

// const square = function (number) {
//     return number* number // map return laga 
// }

// let ans = numbers.map(square)
// console.log(ans);

// same wokimg but short 

 let ans = numbers.map( (number) => {
    return number * number
})
// console.log(ans);



const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {first age: 20},
]Name: "garima",


let objAns = users.map((user)=>{
    return user.firstName
})

// console.log(objAns);



// -------------------------------------------------------------------------------------------------------------------------------------------



// filter method 

// cheeck even odd 

const num = [1,3,2,6,4,8];

// function even(evenNum) {
//     return evenNum %2 === 0 // only bloon 
// }

// let outp = num.filter(even)
// console.log(outp);


let outp = num.filter((oddNumb)=>{
    return oddNumb%2 !== 0
})
console.log(outp);