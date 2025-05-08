const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
 //marvel_heros.push(dc_heros)
 //console.log(marvel_heros) // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ](4th element is dc_heros)

 //const allHeros = marvel_heros.concat(dc_heros)
 //console.log(allHeros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 const all_new_heros = [...marvel_heros,...dc_heros] // spreading method
 //console.log(all_new_heros) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
 const real_another_array = another_array.flat(Infinity) // flat(i) => i is depth of arrays(like 1,2,3),if we don't know than put infinity
 console.log(real_another_array) // [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5] // flat  spread out indepth arrays


 console.log(Array.isArray("Hemang")) // false
 console.log(Array.from("Hemang")) // [ 'H', 'e', 'm', 'a', 'n', 'g' ]
 console.log(Array.from({name:"hemang"})) // [] (empty array)

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3)) //[100,200,300]