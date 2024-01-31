// how to clone array 

let Array1 = ["item1","item2","item3","item4"]

// Using the Spread Operator (`...`):  most using
// let clongerr = [...Array1]
// console.log(clongerr);

// Using the slice Method:
// let clongerr = Array1.slice()
//  console.log(clongerr);

// Using the Array.concat Method
// let clongerr = Array1.concat()
//  console.log(clongerr);


// let addTwoArry = Array1.slice().concat(["item5","item6"])
// console.log(addTwoArry);

// let otherway = [].slice().concat(Array1,["item5","item6"]) 
// console.log(otherway);

let Array2 = ["item5","item6","item7","item8"]

let add = [...Array1,...Array2]
console.log(add);