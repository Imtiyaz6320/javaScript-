const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}

// user1.about()
// const myfun = user1.about() // output undefined
const myfun = user1.about.bind(user1)
myfun();
