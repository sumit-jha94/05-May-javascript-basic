let marks = ["sumit", 69, false]

console.log(marks)

console.log(marks[0])
console.log("type of 0 is", typeof(marks[0]))
console.log(marks[1])
console.log("type of 1 is", typeof(marks[1]))
console.log(marks[2])
console.log("type of 2 is", typeof(marks[2]))
console.log(marks[3])
// this will be undefined as we do not have the value.

// Changing the values
marks[0] = true
marks[1] = 72
marks[2] = true

console.log(marks)

console.log(marks[0])
console.log("type of 0 is", typeof(marks[0]))
console.log(marks[1])
console.log("type of 1 is", typeof(marks[1]))
console.log(marks[2])
console.log("type of 2 is", typeof(marks[2]))
console.log(marks[3])


// boolean can only be replaced with boolean.
// However others can be added to replaced with boolean.

// Arrays Methods

// toString
let num = [1, 2, 3, 7, 10]

console.log(typeof(num) )

let b = num.toString()

console.log(typeof(b))
// b is now string

// join()

let x = ["reena", 6, 45]

console.log(x)

let a = x.join("_")

console.log(a, typeof a)

// pop

let r = num.pop()
console.log(num)
console.log(r)
// it has returned poped element

// push
let p = num.push(45)

console.log(num, p)

// delete

let n = [12, 25, 67, 89, 33]
delete n[0]
// console.log(n)
console.log(delete n[0], n)

// concat

let num1 = [11, 15, 17, 23, 45]
let num2 = [14, 27, 22, 21, 33]

console.log(num1.concat(num2))

// sort()

let num3 = [11, 113, 2, 22, 221, 5, 3, 9, 56]
console.log(num3.sort())

let compare = (a, b)=> {
    return a-b
}
// sorting will be in ascending order.  This will be done with a-b.
// To make it descending order use b-a
num3.sort(compare)

console.log(num3)

// Splice

let numSplice = [551, 22, 3, 7, 10, 22, 25]

numSplice.splice(1, 2, 1021, 1022, 1098)

console.log(numSplice)

// cut from position 1, i.e., from 22.
// remove 2 element from position - 1, i.e., 22 & 3 are removed.
// add 1021, 1022, 1098 in place of removed element.

// Slice

let numSlice = [44, 32, 56, 76, 988, 110, 234, 456, 875, 987]

let newNum = numSlice.slice(2, 6)
// 6 is not included.

console.log(newNum)


// Loop In ARRAYS

let numLoop = [3, 5, 7, 8]

// using FOR Loop
for(let i = 0; i<numLoop.length; i++) {
    console.log(numLoop[i])
}

numLoop.forEach((element) =>{
    console.log(element*element)
})

// Array.from

let name = "sumit"
let arr = Array.from(name)
console.log(arr, typeof(arr))
console.log(typeof(name))

// for...of

for (let i of numLoop){
    console.log(i)
}

// for..in

for(let i in numLoop){
    // console.log(i) 
    // Gives the key
    console.log(numLoop[i])
    // Gives to number
}

// MAP 

let arr2 = [12, 14, 15, 11]

let c = arr2.map((value)=>{
    
    return value + 1
})

console.log(c)

// Map is used when we have to create a new element, while forEach is used when we have to do some operations.

// FILTER METHOD

let arr3 = [11, 9, 20, 22, 33]
let z = arr3.filter((d)=>{
    return d>12
})

console.log(z)

// Reduce

let arr4 = [1, 13, 12, 9, 7, 6]

let newArr3 = arr3.reduce((h1, h2)=>{
    return h1 * h2
})
console.log(newArr3)