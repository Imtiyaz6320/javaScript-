// rest parameters 

function check (a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is `,c);
}

check(1,2,3,4,5,6,12,34,55,66,77,33,4,5,54)


function addsameNumb(...numbers) {
    let total =0
    for (const number of numbers) {
        total = total + number
    }
    
    return total
}
var ans = addsameNumb(9,0,70)
console.log(ans);