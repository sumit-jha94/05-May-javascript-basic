async function harry() {
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("29 Deg")
        }, 1000);
    })

    let mumbaiWeather = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("21 Deg")
        }, 7000);
    })

        console.log("Fetching Delhi Wether")
        let delhiW = await delhiWeather
        console.log("Fetched Delhi Weather:- " + delhiW )

        console.log("Fetching Mumbai Weather")
        let mumbaiW = await mumbaiWeather
        console.log("Fetched Mumbai Weather:- " + mumbaiW)
        return[delhiW, mumbaiW]
}

// harry()

console.log(harry())
