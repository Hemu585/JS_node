/*const user = {
    username: "hemang",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`) // this => refer current context
        console.log(this)
    }
}
*/
/*
user.welcomeMessage() // hemang,welcome to website
user.username = "sam"
user.welcomeMessage() // sam,welcome to website (we did't code hardcore value in function as we used this which is used for current context)
*/
//console.log(this) // {} => empty object in global environment

/*function chai(){
     let username = "hemang"
    console.log(this);
}
chai() // some values (not empty as this is in node environment)*/

/*const chai = function(){
    let username = "hemang"
    console.log(this.username) // undefined
    console.log(this) // some output as this in node environment
}
chai() */

/*const chai = () => {
    let username = "hemang"
    console.log(this.username) //undefined
    console.log(this) // {} (empty for arrow function even this is in node environment)
}
chai() */

/*const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4))// 7*/

/*
const addTwo = (num1,num2) =>  (num1 + num2)  // implicit return (without curley parantheses and return)
console.log(addTwo(3,4)) //7
*/
const addTwo = (num1,num2) =>  ({username:"hemang"}) // object should be in curley braces
console.log(addTwo(3,4)) //  username: 'hemang' }
