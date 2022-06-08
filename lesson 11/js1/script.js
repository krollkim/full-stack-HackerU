var numbers = [8,5,6,8,9,7,8,10,13,15,8,65,54,85,96,85,45,65];

var names = ['אביר', 'טובה', 'עודד', 'מזר', 'אלונה', 'יוכבד', 'לב', 'רומי', 'אלינור', 'אנאל', 'שקד', 'גאולית', 'הוד', 'אילת', 'אצילה', 'אליהו', 'בר', 'נוי', 'אביאור', 'דוריאל'];


function showEvens(){
    var num1 = Number(document.getElementById("num1").value);
    document.getElementById("output1").innerHTML = "";


    for(var i = 0; i < num1; i++){
        if(i % 2 == 0){
            document.getElementById("output1").innerHTML += i + ", ";
            
        } 
    }
}

function showFactorial(){
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = "";

    var result = 1;
    var numbers = [];

    for(var i = 1; i <= num2; i++){
        result *= i;

        numbers.push(i)
    }
    document.getElementById("output2").innerHTML = numbers.join("x ") + "=" + result;
    
}

document.getElementById("numbers").innerHTML = numbers.join();

function big(){
    
    var res = 0;

    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > res){
            res = numbers[i];
        }
        document.getElementById("output3").innerHTML = res;
    }
    
}

function small(){
    
    var res = numbers[0];

    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] < res){
            res = numbers[i];
        }
        document.getElementById("output3").innerHTML = res;
    }
}

function sum(){

    var res = 0;

    for(var i = 0; i < numbers.length; i++){
        res += numbers[i];
    }
    document.getElementById("output3").innerHTML = res;
}

function avg(){
    var res = 0;

    for(var i = 0; i < numbers.length; i++){
    res += numbers[i];
}
    document.getElementById("output3").innerHTML = Math.round(res / numbers.length);

}

function showList(){
    for(var i = 0; i < names.length; i++){
        var li = `<li>
                     ${names[i]}
                        <input class="wow" type="checkbox" 
                        value="${names[i]}">
                 </li>`;

        document.getElementById("list").innerHTML += li;
    }
}
function showChecked(){
    var checkBoxes = document.getElementsByClassName("wow");
    var checked = [];

    for(var i = 0; i < checkBoxes.length; i++){
       var input = checkBoxes[i];

        if(input.checked){
            checked.push(input.value);
        }
        
    }
    alert(checked.join(', '));
}