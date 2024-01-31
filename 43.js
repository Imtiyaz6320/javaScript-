let data =[
    {userId: 1, name:"imtiyaz", lastName:"hussain" , age:23, gender:"male" },
    {userId: 2, name:"iyaz", lastName:"husain" , age:73, gender:"both" },
    {userId: 4, name:"iaz", lastName:"husin" , age:29, gender:"male" },
    {userId: 5, name:"tiyaz", lastName:"hssain" , age:29, gender:"male" },
    {userId: 6, name:"mtiyaz", lastName:"ussain" , age:76, gender:"femal" },
]
// console.log(data);

// for (const user of data) {
//     console.log(user);
// }


// nested destructuring 

const [{name}, ,{lastName},  , {age} ] = data;

console.log(name);
console.log(lastName);
console.log(age);


