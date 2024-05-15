// try {
//     sumit
// } catch (error) {
//     // 3 Error Object - Name, Message & Stack
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }


// Custom Error can be created using Throw Error


// Throwing Custom Error



try {

    let age = parseInt(prompt("Enter Age"))
       if (age>120) {
        // This is the syntax of new error
        throw new ReferenceError("Age is greater then 120")
       } 
        
    } catch (error) {
        
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
    }

    console.log("Script Running")
    