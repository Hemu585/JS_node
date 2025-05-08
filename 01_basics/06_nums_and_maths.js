/*const score = 400

const balance = new Number(100)
console.log(balance) // [Number: 100]
console.log(balance.toString().length) // balance changed to string and properties of string can be applied
console.log(balance.toFixed(2)) // 100.00
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // 23.9
const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(3)) // 124
const otherNumber2 = 1123.8966
console.log(otherNumber2.toPrecision(3)) // 1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 (US standard)
console.log(hundreds.toLocaleString('en-In')) //  10,00,000 (Indian standard)
*/

// **************Maths****************
console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)) // positive output (4)
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.min(4,3,6,8)) // 3

console.log(Math.random()) // between 0 and 1
console.log((Math.random()*10)+1) // between 1 and 11
console.log(Math.floor(Math.random()*10)+1) // between 1 and 10

const min = 10
const max  = 20

console.log(Math.floor(Math.random()*(max - min +1))+min) // between min and max
