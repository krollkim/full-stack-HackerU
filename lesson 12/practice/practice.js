function showbigger(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("output1").innerHTML = "";

    if (num1 < num2){
        document.getElementById("output1").innerHTML = num2 + " - [num2]";
    } else {
        document.getElementById("output1").innerHTML = num1 + " - [num1]";

    }
    console.log(num1)
}


function shownum(){
    var showNum = document.getElementById("num3").value;
    document.getElementById("output2").innerHTML = "";

    document.getElementById("output2").innerHTML = showNum;
    alert(showNum);
    console.log(showNum)
}

function createMultiBoard(){
    var html = "<table>";

    for(var x = 1; x <= 10; x++){
        html += "<tr>";

        for(y = 1; y <= 10; y++){

            html += `<td>${x * y}</td>`;
        }
        
            html += "</tr>";
    }

   html += "</table>";

   document.getElementById("MultiBoard").innerHTML = html;
}

function sumNum() {
    var num = document.getElementById("sumNum").value;
    var sum = 0;

    for(var i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    document.getElementById("output4").innerHTML = sum;
}

function divsize(){
var num1 = Number(document.getElementById("num5").value);
var num2 = Number(document.getElementById("num6").value);
document.getElementById("output5").innerHTML = "";

var div = document.getElementById("output5");

div.style.width = num1 + "px";
div.style.height = num2 + "px";
//  document.getElementById("output5").innerHTML = (num1 * 2) + (num2 * 2);
console.log(output5)
}