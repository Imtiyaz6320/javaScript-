// fill method
// fill  methed same vallue add in array from amin
// value , start , end 

const myArray = new Array(10).fill(6);
// console.log(myArray);

const Array1 = [1,2,3,4,5,6,7,8];
Array1.fill(0,2,5);
console.log(Array1);


// ---------------------------------------------------------------------------

// splice method 
// start , delete , insert 

const myArrayitem = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArrayitem.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
myArrayitem.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArrayitem.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArrayitem);