// primitve vs reference data types

/*Primitive Data Types

Store actual values directly in memory.
Immutable: Their values cannot be changed after creation.
Passed by value: When assigned to a new variable or passed as an argument to a function, a copy of the value is created.
Types:Numbers,Strings,Booleans,Null,Undefined Symbols (unique and immutable identifiers, introduced in ES6)

Reference Data Types

Store a reference (memory address) to the actual value in memory.
Mutable: Their contents can be changed after creation.
Passed by reference: When assigned to a new variable or passed as an argument, both variables refer to the same object in memory.
Types:Objects (collections of key-value pairs),Arrays (ordered collections of values),Functions ,Dates,Regular expressions


Feature	      Primitive Data Types	            Reference Data Types
Storage 	   Actual value in memory	        Reference to value in memory
Mutability  	Immutable               	    Mutable
Passing	        By value	                    By reference
Comparison  	By value	                    By reference  */

// let num1 = 10; // Primitive
// let num2 = num1; // Copy of the value
// num2 = 20; // Changing num2 doesn't affect num1

// let obj1 = { name: "John" }; // Reference
// let obj2 = obj1; // Both variables refer to the same object
// obj2.name = "Jane"; // Changes obj1 as well




// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);


// reference types 
// array 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);
