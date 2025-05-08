/*console.log("H")
console.log("e")
console.log("m")
console.log("a")
console.log("n")
console.log("g")*/

function sayMyName(){
    console.log("H")
console.log("e")
console.log("m")
console.log("a")
console.log("n")
console.log("g")
}

//sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}

addTwoNumbers(3,4) // 7
addTwoNumbers(3,null) // 3
addTwoNumbers(3,"4") // 34

const result = addTwoNumbers(3,5)//8
console.log("Result:", result) // undefined

function addTwoNumbers2(num1,num2){
    //let result = (num1+num2);
    //return result
    return num1 + num2
}

const res1 = addTwoNumbers2(3,5)
console.log(res1) // 8

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Hemang")) // Hemang just logged in
console.log(loginUserMessage(""))// just logged in
console.log(loginUserMessage())// undefined just logged in

function loginUserMessage2(username){
    /*if(username === undefined){
        console.log("Please enter a username")
        return
    }*/
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage2(""))// Please enter a username undefined
console.log(loginUserMessage2())// Please enter a username undefined


function loginUserMessage3(username = "sam"){
    
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage3("Hemang")) // Hemang just logged in
console.log(loginUserMessage3(""))// Please enter a username undefined
console.log(loginUserMessage3())// sam just logged in


function calculateCartPrice(...num1){ // rest operator(...) can add items
    return num1
}

console.log(calculateCartPrice(2)) // [2]
console.log(calculateCartPrice(2,4,5)) // [ 2, 4, 5 ] (in array)

function calculateCartPrice2(val1,val2,...num1){ // rest operator(...) can add items
    return num1
}

console.log(calculateCartPrice2(2)) // []
console.log(calculateCartPrice2(2,4,5,6)) // [5,6] (in array)

const user = {
    username : "Hemang",
    price: 1000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user) // Username is Hemang and price is 1000

handleObject({
    username : "sam",
    price: 400
}) // Username is sam and price is 400


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // 400
console.log(returnSecondValue([200,400,600,800])) // 400