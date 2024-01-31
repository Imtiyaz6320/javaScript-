// spread operator
let arr1 = [1,2,3,4,5,6]
let arr2 =[7,8,9,10,11,12]

let newArr = [...arr1,...arr2]
const newwArr = [..."12345566677"]
// console.log(newwArr);


// spread operator in objects
// obj main same name ka 2 value nahi raha sakta hai 
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique", // same name 
    key3: "value3",
    key4: "value4",
  };


  let obj ={...obj1,...obj2,} // depnde karta hai kon last aa raha wahi key1 print hoga 
  console.log(obj);

//   const newObject = { ...["item1", "item2"] };
const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);



//-------------------------------------------------------------------------------------------------
// object destructuring
const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName:valll, famousSong, ...restProps } = band;
  console.log(valll);
  console.log(famousSong);
  console.log(restProps);


//   bandName:valll ya karn par bandName name change hojaya ga valll