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