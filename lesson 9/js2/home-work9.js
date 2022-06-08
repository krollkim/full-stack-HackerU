var arr = [];

function add() {
    if (event.keyCode == 13){
     var num = document.getElementById("num").value;
    arr.push(Number(num));
    document.getElementById("num").value = "";
    }
}

function show(){
    document.getElementById("output").innerHTML = arr.join();
}

function clearoutput(){
    document.getElementById("output").innerHTML = "";
     arr = [];
}

function deleteLast(){
    document.getElementById("output").innerHTML = arr.pop();
}

function reverse(){
    document.getElementById("output").innerHTML = arr.reverse();
}