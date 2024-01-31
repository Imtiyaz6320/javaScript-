// find method 

// ek arry kay methed hai woh finde karga

const myArray = ["Hello", "cat", "dog", "lion"];

function lenthcheck(string) {
    return string.length ===3
}
var as = myArray.find(lenthcheck)
console.log(as);

// shot methed 
var ans = myArray.find((string)=> string.length===3)
console.log(ans);


const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

var seMethed = users.find((userName)=> userName.userId ===3)
console.log(seMethed);