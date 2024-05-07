let promise = new Promise(function(resolve, reject){
    resolve(56)
    alert("Alert Promise")
})


console.log("hello one")
 setTimeout(() => {
    console.log("Hello settimeout")
 }, 3000);

 console.log("Hello 3")

 console.log(promise)