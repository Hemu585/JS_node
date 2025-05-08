const name = "Hemang"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello my  name is ${name} and my repo count is ${repoCount}`)//more preferred

const gameName = new String('hemang-Singh-58')

console.log(gameName[0])
console.log(gameName.__proto__) // for prototype
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0,6)// from 0 to 5(n-1) // won't take negative values
console.log(newString)

const anotherString = gameName.slice(-14,4) // at negative values start from behind or reverse
console.log(anotherString)

const newStringOne = "   hitesh   " 
console.log(newStringOne)
console.log(newStringOne.trim()) //hitesh (without spaces)

const url = "https://hemang.com%20"
console.log(url.replace('%20','_'))// https://hemang.com_
console.log(url.includes('rohan'))// false
console.log(gameName.split('-'));// [ 'hemang', 'Singh', '58' ]