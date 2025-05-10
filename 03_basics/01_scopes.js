/*let a = 10
const b = 20
var c = 30*/

/*
if (true){
    let a = 10
const b = 20
var c = 30
}
/* {} => scope ,
values should not go outside the scope
var go outside the scope so we should not use it
let and const are block scope but var is global scope
//

//console.log(a) // a not defined
//console.log(b) // b not defined
console.log(c) // 30
*/

/*
let a = 300

if (true){
    let a = 10
const b = 20
var c = 30
console.log("inner:", a)
}
console.log(a)
*/

function one(){
    const username = "hemang"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)// website not defined as it is inside child
    two() 
}
//one() //after removing print website ,output = hemang

if(true){
    const username = "hemang"
    if(username === "hemang"){
        const website = "youtube"
        console.log(username  +  website)  // hemangyoutube      
    }
   // console.log(website) // website not found
}
//console.log(username) //username not found

//******************interesting******************//

console.log(addone(5))//6 // we can excess function before its declaration
function addone(num){ // function
    return num+1
}
console.log(addone(5))// 6


//console.log(addTwo(5)) // cannot excess expression before its declaration
const addTwo = function(num){ // expression
    return num+2
}
console.log(addTwo(5)) //7