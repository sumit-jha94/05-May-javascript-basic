let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Resolved Part 1")
        resolve(34)
    }, 2000)
})

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise 2")
            // alert("All Done")
        }, 3000)
        
    })
    return p2
}).then((value)=>{
    console.log("Program Ended")
})