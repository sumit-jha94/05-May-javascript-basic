let x = function(e) {
    alert("World 1")
}

let y = function(e){
    alert("World 2")
}

button.addEventListener('click', x)

button.addEventListener('click', y)

let a = prompt("What is the number")

if (a==2){
    button.removeEventListener('click', x)
}