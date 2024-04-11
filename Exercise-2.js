
let user = prompt("Enter S ,W Or G")
console.log("user input is:", user)

let random = Math.floor(Math.random() * 3)
console.log("random number is", random)

let cpu = ["S", "W", "G"][random]

console.log("CPU is:", cpu)

const match = (cpu, user)=>{
    if (cpu === user){
        return "no one wins"
    }
    else if(cpu === "S" && user === "W"){
        return "cpu wins"
    }
    else if(cpu === "S" && user === "G"){
        return "user wins"
    }
    else if(cpu === "G" && user === "W"){
        return "user wins"
    }

    else if(cpu === "G" && user === "S"){
        return "cpu wins"
    }

    else if(cpu === "W" && user === "S"){
        return "user wins"
    }

    else if(cpu === "W" && user === "G"){
        return "user wins"
    }
}


let result = match(cpu, user)

console.log(result)






