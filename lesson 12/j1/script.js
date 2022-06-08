function isPrime(x){
    for(var i = 2; i < x; i++){
         if( x % i == 0){
             return false
         }
    }
    
    return true
}


function checkIsPrime() {
var num1 = Number(document.getElementById("num1").value);

if(isPrime(num1)){
    document.getElementById("output1").innerHTML = "prime";
}
else{
    document.getElementById("output1").innerHTML = "not prime";
    }
}


function checkAllDownPrime() {
    var num = Number(document.getElementById("num2").value);
    var numbers = [];

    for (var i = 1; i < num; i++) {
        if (isPrime(i)) {
            numbers.push(i);
        }
    }

    document.getElementById("output2").innerHTML = numbers.join(", ");
}

function showAllDividers() {
    var num = Number(document.getElementById("num4").value);
    var numbers = [];

    for (var i = 1; i <= num; i++) {
        if (num % i == 0) {
            numbers.push(i);
        }
    }

    document.getElementById("output4").innerHTML = numbers.join(", ");
}


function createMultiBoard(){
    var html = "<table>";

        for(var x = 1; x <= 10; x++){
            html += "<tr>";

            
        for(var y = 1; y <= 10; y++){
            html += `<td>${x * y}</td>`
            }
            html += "</tr";
        


    html += "</table>";
    }
    document.getElementById("multiBoard").innerHTML = html;
}

function showDiv() {
    var num1 = Number(document.getElementById("num6").value);
    var num2 = Number(document.getElementById("num7").value);

    var div = document.getElementById("output6");

    div.style.width = num1 * 10 + 'px';
    div.style.height = num2 * 10 + 'px';
    div.style.display = 'block';

    var per = (num1 * 2) + (num2 * 2);

    if (per > 500) {
        div.style.backgroundColor = 'red';
    } else if (per > 400) {
        div.style.backgroundColor = 'green';
    } else if (per > 300) {
        div.style.backgroundColor = 'blue';
    } else if (per > 200) {
        div.style.backgroundColor = 'pink';
    } else if (per > 100) {
        div.style.backgroundColor = 'purple';
    }

    div.innerHTML = `היקף המלבן הוא: <b>${per}</b>`;
}
