
function showPrime() {
    var num = Number(document.getElementById("num1").value);
    document.getElementById("output1").innerHTML = "";

    for (var i = 1; i <= num; i++) {
        if (num % 2 != 0 && num % 3 != 0) {
            document.getElementById("output1").innerHTML = ("prime")
        }else{
            document.getElementById("output1").innerHTML = ("not prime")
        }
    
    }

}

function showbelow(){
    var num = Number(document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = "";

    for (var i = 2 ; i <= num; i++) {
        if (i % 2 != 0 && i % 3 != 0) {
            document.getElementById("output2").innerHTML += i + ", ";
        }
      
    }

}

function showUnprime(){
var num = Number(document.getElementById("num3").value);
document.getElementById("output3").innerHTML = "";

for(var i = 2; i<= num; i++){
    if(i % 1 == 0 && i % 2 == 0){
        document.getElementById("output3").innerHTML += i + ", ";
    }
}

}

function showbiggest(){
 var num3 = document.getElementById("big1").value;  
 var num4 = document.getElementById("big2").value; 
 document.getElementById("output4").innerHTML = "";

 if(num3 < num4){
     document.getElementById("output4").innerHTML = num4;
 } else if (num3 == num4){
    document.getElementById("output4").innerHTML = "they are equal";
 }
 else { 
      document.getElementById("output4").innerHTML = num3;
    // document.getElementById("output4").innerHTML = "they are equal";
 }
console.log(output4)
}

function showA(){
    var alert1 = document.getElementById("alert1").value;
    document.getElementById("output5").innerHTML = "";

    alert(alert1)
    console.log(alert1);
}


var sum = 0;
function showLength(){
    var num =document.getElementById("length").value;
    document.getElementById("output6").innerHTML = "";

    for(var c = 0; c<num.length; c++){
       sum += Number(num[c]);
    }
     document.getElementById("output6").innerHTML = "Digits sum = " + sum;
}