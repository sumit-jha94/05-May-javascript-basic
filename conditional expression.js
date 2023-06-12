// let a = prompt("What is your age");
// console.log(a)

// console.log(typeof a) 

// // Prompt will always be a string

// // a = Number.parseInt(a)
// a = Number.parseFloat(a)
// // Converting string to number

// console.log(typeof a)
// console.log(a)

// // if (a>18) {
// //     alert("Continue With Application")
// // }

// if (a>20) {
//     alert("Contiue With Application")
// } else {
//     alert("Grow Up Man")
// }

let b = prompt("Enter Your Age");

console.log(b);

if (b<10) {
    alert("Grow up Man")
      }      
 else if (b<=17 && b>10  ) {
    alert("Be Patient A Little")
} 
 else {
    alert("Welcome To Your Lisecense")
}

// using Ternary Operator

console.log( "You Can", (b>18 ? "You Can Drive" : "You Cannot Drive"))