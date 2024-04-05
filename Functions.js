function Avg(x, y) {
    console.log("Done")
    return 1 + (x+y) / 2
}

// Arrow Function
const hello = () => {
    console.log("How Are You")
    return "hi"
}

let a = 1;
let b = 3;
let c = 5;

let v = hello();
console.log(v);
console.log("One Plus average a & b is", Avg(a, b))
console.log("One Plus average b & c is", Avg(b, c), hello())
hello();



