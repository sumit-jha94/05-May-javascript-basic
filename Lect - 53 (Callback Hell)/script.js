function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("Script")
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error" + src);
        callback(newError("SRC has some error"))
    }
    document.body.appendChild(script);
    }

    
    
    function nice(error, src) {
        if (error) {
            console.log(error)
            return
        }
        alert("New Loaded " + src);
    }
    
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", nice)