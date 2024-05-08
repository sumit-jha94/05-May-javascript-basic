let p1 = new Promise((resolve, reject) =>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am promise function and resolved")
        resolve(true)
        
        
    }, 4000)
})



let p2 = new Promise((resolve, reject) =>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("I am promise function and rejected")
        
        reject(new Error ("I am error"))
    }, 4000)
})
// console.log(p1)

p1.then((value)=>{
    console.log(value)
})

// console.log(p2)

// Catching the error 

p2.catch((error)=>{
    console.log("Some Error")
})