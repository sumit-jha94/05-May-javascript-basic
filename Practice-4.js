// // Question - 1

// let str = "Har\""
// console.log(str.length)

// Question - 2

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes("quick"))

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence

// Question - 3

const letter = 'This is JUST A CASE'

console.log(letter.toLowerCase())

console.log(letter.toUpperCase())

// Question - 4

let str2 = "Please give me Rs 1000"
let amount = str2.slice("Please give me Rs ".length)
console.log(amount)

// Question - 5

let frnd = "Were you able to do it"

let frnd2 = frnd.replace(/able/i, "Ask")

console.log(frnd2)



// My Question

// Ask user to type their name, then ask them for any integer value (prompt)
// The slice the user name

let nameUser = prompt("Enter User Name")


let cutPoint1 = parseInt(prompt("Enter 1 Point"))
let cutPoint2 = 4



console.log(nameUser)
console.log("1st Cut Point is", cutPoint1)
console.log("2nd Cut Point is", cutPoint2)

console.log(nameUser.slice(cutPoint1,cutPoint2))
