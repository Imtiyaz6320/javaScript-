// intro to for loop 
// print 0 to 9

// for (let i = 0; i <=9; i++) {
//     console.log(i);
// }

// for loop example 

// let total = 0;
// let num = 100;
// for(let i = 1; i<=num; i++){
//     total = total + i;
// }
// console.log(total);


// break keywork
// continue keyword

for (let i = 0; i <=10; i++){
    if (i===4) {
        break
    }
    console.log(i);
}

for (let i = 0; i<=10; i++){
    if (i===4) {
        continue;
    }
    console.log("this wayyyy ",i);
}