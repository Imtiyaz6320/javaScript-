// ternary operator 
//  let age = 13
//  let drink

//  if (age>= 18) {
//     drink = "yes allowed"
//  } else {
//     drink = "plz goto drink milk"
//  }
//  console.log(drink)

// ya working kar raha tha but code line jadda hojata tha To
// is ko simple karn k liya ternary operator / conditional operator   laya gaya 

// let age =11
// let drink = age >=18 ? "yes allowed" : "plz goto drink milk"
// console.log(drink)


// ternary operator, also known as the conditional operator, is a shorthand way of writing an if-else statement in one line. Imagine it as a condensed if-else sandwich!

// ------------------------------------------------------------------------------------------------------------------
// and  or operator 


// and operator 

let name = "mtiyaz"
let age = 23

// if (name[0]==="I") {
//     console.log("your name start Words I");
// }

// if (age > 18) {
//     console.log("your age above in 18 ");
// }

// ya code longe hogaya tha complected bhi 
// i want both condison one if then i am used and operator  && 

// if (name[0] === "I" && age > 18 ) {
//     console.log("Name starts with I and above 18");
// } else {
//     console.log("inside else");
// }

// but ismain ek issue tha ager name aur age sahi hai toh hi if Condition jaya 
// dono ka sahi hona jaruri hai ta work karga 

// yahi problem slove karn k liya or operator  aaya 


// or operator ||

if (name[0] === "I"|| age > 18 ) {
    console.log("Name starts with I and above 18");
} else {
    console.log("inside else");
}