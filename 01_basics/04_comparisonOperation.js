// console.log(2>1) => true
//console.log("2" > 1) // true
//console.log("02" > 1) // true
console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true
// reason => comparison converts null to a number ,treating it as 0
// while equality treats null differently

// for undefined instead of null => always false

// === => strictly check(check datatype also)
console.log("2" === 2) // false

// avoid null and undefined comparisons