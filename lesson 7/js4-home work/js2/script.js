/*no:1*/

function check(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num1 > num2){
        document.getElementById("output").innerHTML = num1;

    } else if (num2 > num1){
        document.getElementById("output").innerHTML = num2;
    } else {
        document.getElementById("output").innerHTML = "they are equal";
    }
}

/*no:2*/


function quastion(){
    var numM = document.getElementById("numM").value;

    if (numM == 5){
        alert("its true");
    } 
    else {
    alert("not true");
    }
}

/*no:3*/

var btn = 0;

function count(){
    document.getElementById("btn").innerHTML = ++btn;
    
}

/*no:4*/


function less(){
    var sum1 = document.getElementById("sum1").value;
    var sum2 = document.getElementById("sum2").value;
    
    document.getElementById("get").innerHTML = (Number(sum1) - Number(sum2));

}

/*challenge-no:1*/

function button(){
    var change = document.getElementById("change").innerHTML

    if (change == "true"){
        document.getElementById("change").innerHTML = "false";
    } else {
        document.getElementById("change").innerHTML = "true";
    }
}

/*challenge-no:2*/
/*not working yet*/


function swap(){
    let swc = 0;
    let x = document.getElementById("switch1")
    let y = document.getElementById("switch2")

    swc = x.value;
    x.value = y.value;
    y.value = swc;

}

/*challenge-no:3*/

function mod(){
    var modulus = document.getElementById("modulus").value;

    document.getElementById("mod2").innerHTML = (Number(modulus) % 2);
}