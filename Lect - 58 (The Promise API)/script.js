let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 1")
    }, 1000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject(42)
        // resolve("value 2")
        
    }, 4000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("value 3")
    }, 3000);
});

// Using Promise.all

// let promise_all = Promise.all([p1,p2,p3])

// promise_all.then((value)=>{
//     // console.log("Promise.all value is:- " + value)
//     console.log(value)
// })

// Using Promise.allsettled

// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     // console.log("Promise.all value is:- " + value)
//     console.log(value)
// })

// // Using Promise.race

// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
   
//         console.log(value)
//     })



// Using Promise.any

let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=>{
        console.log(value)
    })