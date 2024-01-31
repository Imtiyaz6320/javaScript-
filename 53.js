// param destructuring 

// object 
// react 

const abc = {
    name: "imtiyaz",
    gender:"male",
    // age:67
}


// old way write code 

// function xyz(object) {
//     console.log(object.name);
//     console.log(object.gender);
//     console.log(object.age);
// }

// xyz(abc)


function xyz({name,gender,age}) {
    console.log(name);
    console.log(gender);
    console.log(age);
}

xyz(abc)
