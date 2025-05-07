const accountId = 144553
let accountEmail = "hemang@google.com"
var accountPassword = "12345"
let accountState
// accountId = 2 // not allowed beacause it is constant
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountCity = "Jaipur"
accountEmail = "HS@google.com"
accountPassword = "512345"
accountCity = "Bangalore"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//if value of variable not defined then it will show undefined