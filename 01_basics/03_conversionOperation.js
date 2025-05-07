/*let score = "33abc"

console.log(typeof score);// string
console.log(typeof (score));// string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN
/* null => 0
 undefined => NaN
 "33" = 33
 "33abc" = NaN
 true = 1, false = 0
"hemang" = NaN (not a number) , but type is number
*/
/*let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedin)
console.log(booleanIsLoggedIn) // => true
/* isLoggedIn = "" => false
isLoggedIn = "hemang" => true*/

/*let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);// 33
console.log(typeof stringNumber);// String
*/

// ************Operations********** 
 
let value = 3
let negvalue =  - value;

// console.log(2+2)
//console.log(2*2)  => multiply
// console.log(2**3) => 2^3

//console.log(negvalue)

let str1 = "hello"
let str2 = "hemang"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);// 12
console.log(1 + "2");// 12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(true) // true
console.log(+true) // 1
//console.log(true+) // not allowed
console.log(+"") // 0

let num1,num2,num3

num1 = num2 = num3 = 2 + 2

let gamecounter = 100
gamecounter++
console.log(gamecounter) // 101
// ++gamecounter => also 101