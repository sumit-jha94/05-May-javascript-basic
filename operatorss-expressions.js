let a = 44;

let b = 5;

console.log( "Addition a + b = ", a+b);

console.log( "Substraction a - b = ", a-b);

console.log( "Multiply a * b = ", a*b);

console.log( "Divide a / b = ", a/b);

console.log( "Modulus (This show reminders) a % b = ", a%b);

console.log( "Exponential a ** b = ", a**b);

// console.log( "Increment a ++ = ", a++);
// ++a wil add increase the value first and then print a
// a++ will print a and then increase the value.
console.log("value of a", a)
console.log( "Increment ++a = ", ++a); 45

console.log("value of a", a)

console.log( "Increment a++ = ", a++); 45
console.log("value of a", a)


// By using increment, the value of a has been increased. Now it will be treated as 45.
// a = 46

console.log( "Addition after increment a + b = ", a+b);

console.log( "Decrement a -- = ", a--);

// Assignment Operators

console.log("Assignment Operators");
c = 8

console.log(c);
// console.log(c=c+5);
c +=5
console.log(c);
// this is same as c=c+5

// Comparions Operators

let comp1 =6;
let comp2 = 7;

console.log("Equal To ", comp1 == comp2)
console.log("Not Equal To", comp1 != comp2)

console.log("Triple Equal To ", comp1 === comp2)
console.log("Double Not Equal To", comp1 !== comp2)

// === this will check the type and values both.
// == this will check just the values

let ram1 = 6;
let ram2 = "6";

console.log("ram1 == ram2 is", ram1 == ram2)
console.log("ram1 != ram2 is", ram1 != ram2)

console.log("ram1 === ram2 is", ram1 === ram2)
console.log("ram1 !== ram2 is", ram1 !== ram2)

// Logical Operators

let x = 5;
let y = 7;

console.log("Logical and", x+y && x==5)
console.log("Logical or", x<y || x==y)
console.log("Logical not", !false)
