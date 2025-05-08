// singleton (one object of its own kind)

//Object.create // constructor method(singleton)


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name : "Hemang", // can define keys like 0 instead of name
    "full name" : "Hemang Singh", // can be accessed only through square bracket method
    age : 21,
    mySym : "mykey1",
    [mySym] : "mykey2",
    location : "Jaipur",
    email : "hemang@google.com",
    isLoggedIn : false,
    lastLogindays : ["Monday","Saturday"]
}
/*
console.log(JsUser.email) // hemang@google.com
console.log(JsUser["email"]) // hemang@google.com
console.log(JsUser["full name"]) // Hemang Singh (error in dot method)
console.log(JsUser.mySym) // mykey1 (but symbol is not used)
console.log(JsUser[mySym]) // mykey2 (used as a symbol here)

JsUser.email = "hemang@amazon.com"
console.log(JsUser["email"]) //hemang@amazon.com
Object.freeze(JsUser) // cannot change aftyer freeze
JsUser.email = "hemang@microsoft.com"
console.log(JsUser["email"]) //hemang@amazon.com
//console.log(JsUser) // mySym as 'mykey1' but [mySym] as [Symbol(key1)]: 'mykey2'
*/

JsUser.greeting = function(){ //cannot use function after freezing
    console.log("Hello JS user");
}

console.log(JsUser.greeting()) // Hello JS user
console.log(JsUser.greeting) // [Function (anonymous)]

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
    console.log(JsUser.greeting2())  //Hello JS user, Hemang
