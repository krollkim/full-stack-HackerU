
// setting date & hours
function dato(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    document.getElementById("output").innerHTML = h + "-" + m + "-" + s;

    setInterval(dato, 500)
}

// print page
function printW(){
    window.print();
}

//  get date

let date = new Date();
let dd = date.getDate();
let mm = date.getMonth()+1;
let yyyy = date.getFullYear();

document.getElementById("output2").innerHTML = dd + "/" + mm + "/" + yyyy;


// Fibonacci numbers
function fibo(){

    let res = 0;
    let num1 = 0;
    let num2 = 1;

    for( num1; num1 < 144;){
        res = num1 + num2;
         num1 = num2
         num2 = res;

       
        console.log(res)
    }
}

// sort an array from small to big
let res = 0;
const arr1 = [9, 10, 8, 5, 3, 56, 20, 10, 1, 2, 3, 4];
const arr2 = [];

while(arr2 <= Number(arr1)){
    arr2 += arr1 + ", ";
    console.log(arr2)
        i++;
}
// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] < arr1[i+1]){
//         res = arr1[i];
//         arr1[i] = arr1[i+1];
//         arr1[i+1] = res;

     
//     }console.log(arr1)
// }


// triangle length

let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;

const area = Math.sqrt(s * ((s-a) * (s-b) * (s-c)));
console.log(area)

// random integer between 1 to 10

function integer(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let rand = Math.round(Math.random() * arr.length);
    // can do as well with - const num = Math.ceil(Math.random() * 10);
    let num = document.querySelector("#num").value;
    
    if(num == rand){
        document.querySelector("#output3").innerHTML = "Good Work";
    }
    else{
        document.querySelector("#output3").innerHTML = "Not matched, the number was - " + rand;
    }

    console.log(rand)
}

// calculate multiplication and division of two numbers

function calcMul(){
let num3 = document.querySelector("#num3").value;
let num4 = document.querySelector("#num4").value;

let res = Math.floor(num3 * num4);
document.querySelector("#output4").innerHTML = "~ " + res + " ~";

}

function calcDiv(){
let num3 = document.querySelector("#num3").value;
let num4 = document.querySelector("#num4").value;

let res = Math.floor(num3 / num4) ;
document.querySelector("#output4").innerHTML = "~ " + res + " ~";
}

// check if positive  or negative

function checkNum(){
    let num5 = document.getElementById("inp1").value;
    let num6 = document.getElementById("inp2").value;

    // if(num5 > 0){
    //   document.getElementById("output5").innerHTML = num5 +"the number is positive"; 
    // }
    // else if(num5 < 0){
    //     document.getElementById("output5").innerHTML = num5 +   "the number is negative";
    // }
    // else if(num6 > 0){
    //     document.getElementById("output5").innerHTML = num6 +"the number is positive"; 
    // }
    //   else{
    //       document.getElementById("output5").innerHTML = num6 +  "the number is negative";
    //   }
  

    switch(num5){
        case 1: return num5 +"the number is positive";
        case 2: return num5 +"the number is positive";
        case 3: return num5 +"the number is positive";
        case 4: return num5 +"the number is positive";
        case 5: return num5 +"the number is positive";
        case 6: return num5 +"the number is positive";
        case 7: return num5 +"the number is positive";
        case 8: return num5 +"the number is positive";
        case 9: return num5 +"the number is positive";
        case 10: return num5 +"the number is positive";
        case -1: return num5 + "the number is negative";
        case -2: return num5 + "the number is negative";
        case -3: return num5 + "the number is negative";
        case -4: return num5 + "the number is negative";
        case -5: return num5 + "the number is negative";
        case -6: return num5 + "the number is negative";
        case -7: return num5 + "the number is negative";
        case -8: return num5 + "the number is negative";
        case -9: return num5 + "the number is negative";
        case -10: return num5 + "the number is negative";
    }
    switch(num6){
        case 1: return num6 +"the number is positive";
        case 2: return num6 +"the number is positive";
        case 3: return num6 +"the number is positive";
        case 4: return num6 +"the number is positive";
        case 5: return num6 +"the number is positive";
        case 6: return num6 +"the number is positive";
        case 7: return num6 +"the number is positive";
        case 8: return num6 +"the number is positive";
        case 9: return num6 +"the number is positive";
        case 10: return num6 +"the number is positive";
        case -1: return num6 + "the number is negative";
        case -2: return num6 + "the number is negative";
        case -3: return num6 + "the number is negative";
        case -4: return num6 + "the number is negative";
        case -5: return num6 + "the number is negative";
        case -6: return num6 + "the number is negative";
        case -7: return num6 + "the number is negative";
        case -8: return num6 + "the number is negative";
        case -9: return num6 + "the number is negative";
        case -10: return num6 + "the number is negative";
    }
   document.getElementById("num5" && "num6").innerHTML =
}