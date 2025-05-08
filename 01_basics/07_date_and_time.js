// Dates

/*let myDate = new Date()
console.log(myDate) // 2025-05-08T05:02:33.268Z (not readable)
console.log(myDate.toString());//Thu May 08 2025 05:05:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Thu May 08 2025
console.log(myDate.toLocaleString());//Thu May 08 2025
console.log(typeof myDate) // object

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()) // 1/23/2023, 12:00:00 AM
*/

/*let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() // for polls and quiz winners
console.log(myTimeStamp) // 1746681108072

console.log(myCreatedDate.getTime()) // 1673654400000

console.log(Date.now()) //1746681270726

console.log(Math.floor(Date.now()/1000)) // 1746681344
*/
let newDate = new Date()
console.log(newDate) // 2025-05-08T05:17:31.580Z
console.log(newDate.getMonth()+1); // 5
console.log(newDate.getDay()) // 4 

newDate.toLocaleString('default',{
    weekday : "long"
    //timeZone : '' (search from google)
})