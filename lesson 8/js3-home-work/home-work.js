/*part 1*/

function con(){
    var con = document.getElementById("dollar").value;
    var x = Number(con) / Number(3.21)

    document.getElementById("answer").innerHTML = x + "$";

    
    document.answer.style.backgroundColor = color;
}


/*part 2*/


function pickC(){
    var c = document.getElementById("pick").value;
    document.body.style.backgroundColor = c;
}


/*part 3*/


function combine(){

    var len = document.getElementById("len").value;

    var wid = document.getElementById("wid").value;

    var com = Number(len * 2) + Number(wid * 2);

    document.getElementById("get").innerHTML = com;
}

/*part 4*/


function random(){
    var max = 6;
    var min = 1;
    var random = Math.random();

   var result = Math.floor(random * max) + min;

   document.getElementById("dice").src = "../../../dices/dice" + result + 
   ".png"
}

/*part 4*/

function random1(){
    var max = 6;
    var min = 1;
    var random1 = Math.random();
    var random2 = Math.random();

   var result1 = Math.floor(random1 * max) + min;
   var result2 = Math.floor(random2 * max) + min;

   document.getElementById("dice2").src = "../../../dices/dice" + result1 + 
   ".png";
   
   document.getElementById("dice3").src = "../../../dices/dice" + result2 + 
   ".png";
}