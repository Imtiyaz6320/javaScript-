// reduce 

const numbers = [1,2,3,4,5,10];

// aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue
})
console.log(sum);

// const add = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator+currentValue
// },100) // 100 jab add karga tab 100 sa start hoga
// console.log(add);


// woking for methed 
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const pricee = userCart.reduce((totalePrice,currentPrice)=>{
    return totalePrice + currentPrice.price
},0)

console.log(pricee);


// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000
