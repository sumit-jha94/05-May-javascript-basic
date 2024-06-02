let p = fetch("https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=o0M3mWqKTpS9A6Kvr20CbtN08b3n3tkW")

p.then((response1)=>{
    console.log("Respnose 1 Status", response1)
    console.log("Status", response1.status)
    console.log("Ok Value", response1.ok)
    return response1.json()
}).then((response)=>{
    console.log(response)
})





// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '405c4e2eabmshd9dc9e198f7c4f2p184f14jsn0d78def73e7f',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }