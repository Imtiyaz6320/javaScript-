// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

var name = "myNameImtiyaz"
for (const chercte of name) {
    console.log(chercte);
}

var array = ["item1","item2","item3","item4"]
for (const iterator of array) {
    console.log(iterator);
}


// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

const firstName = "harshit";
console.log(firstName.length);
console.log(firstName[2]);