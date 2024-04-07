// Map

let arr = [23, 45, 78]

let a = arr.map((value)=>{
    console.log(value)
    return value + 1
})

console.log(a)

// Array Filter Method

let arr2 = [23, 45, 78, 20, 15, 25]

let a2 = arr2.filter((a)=>{
    return a<30
}) 

console.log(a2)


// Array Reduce Method

let arr3 = [1,2,4,6,3]

let a3 = arr3.reduce((a , b)=>{
return a + b
})

console.log(a3)

// It adds all the value