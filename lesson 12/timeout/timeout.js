var i = 0;
var myinterval;
var arr = [];

function start() {
myinterval = setInterval(function() {
        document.getElementById("output").innerHTML = ++i;
    }, 100);
}

function stop(){
    clearInterval(myinterval);
}


function reset(){
    stop()
    var i = 0;
    document.getElementById("output").innerHTML = i;
}

function save(){
    arr.push(i);
    document.getElementById("output2").innerHTML = arr.join("<br>");
}