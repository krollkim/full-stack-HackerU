function con() {
    var dollarRate = 3.21;
    var num = document.getElementById("dollar").value;
    var result = Math.round(num / dollarRate * 100) / 100;
    document.getElementById("answer").innerHTML = result + "$";
}

var numbers = [];

function add() {
    if (event.keyCode == 13){
     var num = document.getElementById("num").value;
    numbers.push(Number(num));
    document.getElementById("num").value = "";
    }
}

function show(){
    document.getElementById("output").innerHTML = numbers.join();
}