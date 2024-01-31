// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)
/*What are Sets?
Sets are collections of unique values. Each value can only occur once in a Set.
They are unordered, meaning the elements are not stored in a specific sequence.
You can iterate over the elements of a Set, but the order in which they are returned is not guaranteed to be the same as the order in which they were added.*/ 



// const items = ['item1', 'item2', 'item3'];  // aise arry likta hai
// const numbers = new Set(); // aise set likta hai 
// numbers.add(1);    //set number/string add karta hai .add methed seta kahota hai 
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);

// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }

// for(let number of numbers){    //it is iterable
//     console.log(number);
// }

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray); // array add sets

// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);