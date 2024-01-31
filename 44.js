// function

function showMess(){
    console.log("Happy new years.........");
}

showMess()

function addThreeNo(num1,num2,num3) {
    return num1+num2+num3
}
console.log(addThreeNo(9,3,12));


// isEven
// input : 1 number 
// output : true , false 

function checkOddEven (number){
    return number % 2 === 0
}
console.log(checkOddEven(4));


// input : string 
// output: firstCharacter 

function firstCharacter(anystring) {
    return anystring[0]
}

console.log(firstCharacter("abc"));


// function 
// input : array, target (number)
// output: index of target if target present in array

function arrTarget(array,target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true
        }
    }
    return -1
}
let myarry = [1,2,3,4,5,6,7,8]
const ans = arrTarget(myarry,50)
console.log(ans);