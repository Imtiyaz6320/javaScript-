// every method

// every methed check karta hai sab arry sum hai usko ager ek bhi mila gaya toh false ho jaya ga 

const numbers = [2,4,6,8,10];
// const numbers = [2,4,6,9,10];
var ans = numbers.every((checek)=> checek%2===0)
// console.log(ans);



const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]


var  comper =  userCart.every((priceCamp)=> priceCamp.price >3000)
// console.log(comper);

// ------------------------------------------------------------------------------------------------------

// some method 


// ya check kage ga ki ek bhi number sum hai ya nahi ager ho ga toh true retren kage 



// const num = [3,5,11,9];
const num = [3,5,12,9];

var vale = num.some((sumcheck)=> sumcheck%2===0)
console.log(vale);

const Cart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

var info = Cart.some((chiking)=>chiking.price>100000)
console.log(info);