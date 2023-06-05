console.log("This is Let vs const vs var")

// declaring var
// var a = 45;
// var b = "Harry";
// var c = null;
// var d = undefined;

// {
//     var b = 'this';
//     console.log(b)
// }
// console.log(b)

// here is solution is 
// this
// this

// declaring let

let a = 45;
let b = "Harry";
{
    let b = 'this';
    console.log(b)
}
console.log(b)

// Here the value in {} block is in block itself. while outside block the values is global.


