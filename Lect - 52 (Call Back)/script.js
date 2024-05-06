function loadScript(src, callback){
var script = document.createElement("script");
script.src = src;
script.onload = function() {
    console.log("Script")
    callback();
}
document.body.appendChild(script);
}

function nice() {
    alert("New Loaded");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", nice)