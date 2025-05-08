//const tinderUser = new Object() // singleton object
//console.log(tinderUser) //{}

const tinderUser  = {} // non-singleton object
//console.log(tinderUser) //{}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname:{
            firstname : "Hemang",
            lastname : "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname) // Hemang

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//console.log(obj3);// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign(obj1,obj2)
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = Object.assign({},obj1,obj2) // use of parantheses is better in assign
console.log(obj4);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {1: "a", 2: "b"}
const obj6 = {3: "a", 4: "b"}
const obj7 = {5: "a", 6: "b"}
const obj8 = Object.assign({},obj5,obj6,obj7)
console.log(obj8) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const obj9 = {...obj5,...obj6,...obj7} // spread method
console.log(obj9) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [{
    id: 1,
    email: "h@gmail.com"
},
{
    id: 1,
    email: "h@gmail.com"
},
{
    id: 1,
    email: "h@gmail.com"
},
]

users[1].email
console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ] (in array datatype)
console.log(Object.values(tinderUser))// [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser))// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))// true