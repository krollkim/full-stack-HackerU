function bigColor(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    document.getElementById("num1").style.backgroundColor = "white"  
        document.getElementById("num2").style.backgroundColor = "white" 
        
    if ( num1 > num2){
        document.getElementById("num1").style.backgroundColor = "pink" 
    } else if (num1 < num2){

        
        document.getElementById("num2").style.backgroundColor = "pink"

    }
}

function quastion(){
    var numQ = document.getElementById("numQ").value;

    if(numQ == 5){
        alert("true")
    }else if (numQ == 4){
        alert("true")

    }
    else{
        alert("false")
    }
}

function less(){
    var num1 = document.getElementById("sum1").value;
    var num2 = document.getElementById("sum2").value;

    var result = num1 - num2;

    document.getElementById("get").innerHTML = num1 + " - " + num2 + " = " + result;
    if(num1 > num2){


    }
}
var isBtn = true;

function btn(){
    isBtn = !isBtn;

    document.getElementById("change").innerHTML = isBtn;
}
function swap(){
    var x = document.getElementById("switch1").value;
    var y = document.getElementById("switch2").value;

    document.getElementById("switch1").value = y;
    document.getElementById("switch2").value = x;
    
}
function mod(){
    var x = Number(document.getElementById("modulus").value);

    if(x % 2){
        alert("odd");
    }else{
        alert("even");
    }

}
function select(){
    var x = document.getElementById("sel").value;

    if(x == 8){
        alert("right");
    }else{
        alert("not right");
    }
}

var num = 0;

function wow(){
    num++;
    document.getElementById("outputWow").innerHTML += num + ", ";
}