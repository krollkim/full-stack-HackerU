function setTime(){
    var num = document.getElementById("num1").value;
    document.getElementById("output").innerHTML = "loading...";
    document.getElementById("btn1").disabled = true;

    setTimeout(function() {
        document.getElementById("output").innerHTML = 
        "sucsses!";
    }, num * 1000);
    ;
}
function clear(){
    document.getElementById("output").innerHTML = "";
}
var inter;
function timer(){
    clearInterval(inter);
    var num2 = Number(document.getElementById("num2").value);
    
    document.getElementById("output2").innerHTML = num2;

    inter = setInterval(function() {
        document.getElementById("output2").innerHTML = --num2;

        if(num2 == 0){
            clearInterval(inter);
            document.getElementById("output2").innerHTML = "finished timer....";
        }
    },1000);

}

var isOn = false;
var myInterval;

function brokenTrafficLights(){
clearInterval(myInterval);
   myInterval = setInterval(function(){

    isOn = !isOn;
    if(isOn){
        document.getElementById("orange").style.backgroundColor = "orange";
    }else {
        document.getElementById("orange").style.backgroundColor = "";
    }
    }, 1000)


}

function clearTrafficLights() {
    document.getElementById('red2').style.backgroundColor = '';
    document.getElementById('orange2').style.backgroundColor = '';
    document.getElementById('green2').style.backgroundColor = '';
}



function red() {
    clearTrafficLights();

    document.getElementById('red2').style.backgroundColor = 'red';

    setTimeout(redAndOrange, 5 * 1000);
}

function redAndOrange() {
    clearTrafficLights();

    document.getElementById('red2').style.backgroundColor = 'red';
    document.getElementById('orange2').style.backgroundColor = 'orange';

    setTimeout(green, 2 * 1000);
}

function green() {
    clearTrafficLights();

    document.getElementById('green2').style.backgroundColor = 'green';

    setTimeout(orange, 5 * 1000);
}

function orange() {
    clearTrafficLights();

    document.getElementById('orange2').style.backgroundColor = 'orange';

    setTimeout(red, 1000);
}

function clock(){
    var now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    var clock2 = h + "," + m + "," + s;

    document.getElementById("clock").innerHTML = clock2;

    setTimeout(clock, 1000);
}

function rand(){
    var names = document.getElementById("text").value;
    var arr = names.split("\n");

    var rand = Math.floor(Math.random() * arr.length);

    document.getElementById("output3").innerHTML = arr[rand];
}