//Primitive

// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsidetemp = null // null means empty not zero

let userEmail;
const id  = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
const bigNumber = 34565725757237273276n

//Reference type (Non primitive)


// Array, Objects, Functions

const heros = ["Batman,Superman,Ironman"];
let myObj = {
    name : "hemang",
    age : 21,
} // Object

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber) // bigint
console.log(typeof outsidetemp)//Object
console.log(typeof myFunction) // Function(function object if specifically said)
console.log(typeof heros) // Object