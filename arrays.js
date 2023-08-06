let marks = ["sumit", 69, false]

console.log(marks)

console.log(marks[0])
console.log("type of 0 is", typeof(marks[0]))
console.log(marks[1])
console.log("type of 1 is", typeof(marks[1]))
console.log(marks[2])
console.log("type of 2 is", typeof(marks[2]))
console.log(marks[3])
// this will be undefined as we donot have the value.

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


