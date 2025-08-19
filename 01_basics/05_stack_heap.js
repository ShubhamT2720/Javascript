// Primitve data ----> stack memory

let Name = "shubham"
let anotherName = Name
/* let anotherName = "Thakur" You are declaring anotherName twice with let.
   In JavaScript, you cannot redeclare a variable in the same scope with let or const.*/

anotherName="Thakur"       // // ✅ reassignment, not redeclaration

console.log(Name)       // shubham   
console.log(anotherName)  // thakur
console.log(Name)        // shubham

/* Copy by Value concept is applied here, where original value doesnt change, rather it created another copy */

// Non-primitive ----> heap memory

let userOne = {
    email:"st62586@gmail.com",
    phoneno: 7999483191

}

let userTwo = userOne
userTwo.email("shubhamt2720@gmail.com")

console.log("userOne")
console.log("userTwo")