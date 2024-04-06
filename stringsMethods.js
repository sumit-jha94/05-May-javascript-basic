// Length

let pro = "Sumit"

console.log(pro.length)

let pre = "Sumit\n"
console.log(pre.length) 
// This is not could as 7. This will be 6 as \n is one character.

// toUpperCase

let gao = "village"
console.log(gao.toUpperCase())

console.log(pro.slice(2,4))
// Here last character has not been included.
console.log(pro.slice(2))

// Replace 

let name = "Harry Bhai"

let newName = name.replace( "Bhai", "Bhau" )

console.log(newName)
console.log(name.replace("Bhai" , "Bhau"))

// CONCAT   

let name1 = "harry"
let name2 = "Naman"
console.log(name1.concat( " is a friend of ", name2 ))

// We have added name1 & Name 2

console.log(name1, "is good with ", name2)
console.log(name1, "good " + name2)

// TRIM

let friend1 = "Namit"

let friend2 = "  Meena   "

console.log(friend2)

console.log(friend2.trim())


