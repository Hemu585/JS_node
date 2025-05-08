// array

const myArr = [0,1,2,3,4,5] // javascript arrays are resizable
console.log(myArr[0]) // 0

const heros = ["batman","superman"]
const arr2 = new Array(1,2,3,4)
console.log(arr2[1]) // 2

// Array methods

myArr.push(6)
myArr.push(7)
console.log(myArr) // [0,1,2,3,4,5,6,7]
myArr.pop()
console.log(myArr) //[0,1,2,3,4,5,6]

myArr.unshift(9)
console.log(myArr) // [9,0,1,2,3,4,5,6]

myArr.shift()
console.log(myArr) // [0,1,2,3,4,5,6]

console.log(myArr.includes(9)) // false

console.log(myArr.indexOf(9)) // if element not present than it will give -1
const newArr = myArr.join()
console.log(myArr) // [0,1,2,3,4,5,6]
console.log(newArr) // 0,1,2,3,4,5,6
console.log(typeof newArr) // string

// slice,splice

console.log("A",myArr) // A  [0,1,2,3,4,5,6]
const myn1 = myArr.slice(1,3)  // slice don't change original array
console.log(myn1) // [1,2]

const myn2 = myArr.splice(1,3)  // splice includes last index and changes original array by deleting elements which splice array contains
console.log(myArr) // [0,4,5,6]
console.log(myn2) // [1,2,3]

