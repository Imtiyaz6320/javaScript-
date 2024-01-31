// important array methods 
// forEach
// map
// filter
// reduce

// forEach

/*When you need to perform actions on each element without creating a new array or modifying the original array.
When you don't need a return value from the iteration. */

const array = [12,2,4,7,3,6]

// function arrmath(number,index) {
//     console.log(number *2);
//     // console.log(index);
// }

// arrmath(array[0],0)

// for (let i = 0; i < array.length; i++) {
//     arrmath(array[i],i);    
// }

// same work in for loop

// array.forEach(arrmath)

// twoline sab hogaya

array.forEach(function(number,index){
    // console.log(number*2);
})



const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

users.forEach(function(user){
    // console.log(user.firstName);
});

users.forEach((user, index)=>{
    // console.log(user.firstName, index);
})

for(let user of users){
    console.log(user.firstName);
}