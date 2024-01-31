// for loop in array 

let fruit = ["apple","bnana","orange","mango","grapefruit","kiwi","starwberry","blueberry","pineapple"]
console.log(fruit.length);
let fruit1 = []

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// for(let i=0; i<9; i++){
//     fruit1.push(fruit[i].toUpperCase(fruit1))
//     console.log(fruit1[i]);
// }



// ----------------------------------------------------------------------------------------------------------------
// use const for creating array

// normal chang nahi hota but arry hota hai 

// heap memory ["apple", "mango"] 0x11
// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana");
// console.log(fruits)



// ----------------------------------------------------------------------------------------------------------------

// let i = 0;
// while(i<fruit.length){
//     fruit1.push(fruit[i].toUpperCase());
//     i++;
// }
// console.log(fruit1);

// ----------------------------------------------------------------------------------------------------------------

// for of loop in array


// for (let abc of fruit) {
//     fruit1.push(abc.toUpperCase())
// }
// console.log(fruit1);


// ----------------------------------------------------------------------------------------------------------------

// for in loop in array

for(let index in fruit){
    fruit1.push(fruit[index].toUpperCase());
}
console.log(fruit1);