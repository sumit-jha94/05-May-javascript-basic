// Question - 1

let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 6,
}

for(let i=0; i<Object.keys(marks).length;i++){
    console.log("The marks Of " + Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
}

// // Question - 2

// let marks = {
//     harry: 90,
//     shubham: 9,
//     lovish: 56,
//     Monika: 6,
// }

// for(let i in marks){
//     // console.log(i)
//     // console.log(marks)
//     // console.log("The marks of " + i + " is " + marks[i])
// }
// //  Other Version

// for(let key in marks) {
//     console.log("The marks of " + key + " is " + marks[key])
// }

// // Question - 3

// let cn = 4
//  let i

//  while (i != cn) {
//     i = prompt("Enter a number")
//     console.log("Try Again")
    
//  }

//  console.log("Your Number Is Correct")

// Question - 4

// const mean = (a, b) => {
//     return ((a + b ) /  2);
// }

// console.log(mean(4,5,6,7))

// Other Version, while taking input from user

// const mean = (a, b, c, d) => {
//     return (a + b + c + d ) / 4;
// };

// let a = prompt("Enter 1st Number");
// let b = prompt("Enter 2nd Number");
// let c = prompt("Enter 3rd Number");
// let d = prompt("Enter 4th Number");

// console.log("The mean of 4 number is", mean(Number(a), Number(b), Number(c), Number(d)))


// Without using "Number" the values will be calculated as string.