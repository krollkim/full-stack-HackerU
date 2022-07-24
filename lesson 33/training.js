function isEven(){
    let num = +document.querySelector("#c1 input").value;
    let output = document.querySelector("#c1 .output");

    if(num % 2 == 0){
        output.innerHTML = "even";
        output.style.color = "deeppink";

    }
    else{
        output.innerHTML = "odd";
        output.style.color = "skyblue";
    }
}

function isPrime(){
let isPrime = true

const num = +document.querySelector("#c2 input").value;
let output = document.querySelector("#c2 .output");
for(let i = 2; i < num; i++){
    if(num % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    output.innerHTML = "is prime"
    output.style.color = "deeppink";

}else{
    output.innerHTML = "not prime"
    output.style.color = "skyblue";
}
}

function isBelowPrime(){
const num = +document.querySelector("#c3 input").value;
let output = document.querySelector("#c3 .output");
const numbers = [];

for(let n = 1; n < num; n++){
    let isPrime = true;

    for(let i = 2; i < n; i++){
        if(n % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        numbers.push(n)
    }
}
output.innerHTML = numbers.join(" , ")
}

function switchInput(){
    const num1 = document.querySelector("#c4 #inp1");
    const num2 = document.querySelector("#c4 #inp2");

    const temp1 = num1.value;
    const temp2 = num2.value;

     num2.value = temp1;
     num1.value = temp2;

}

function atzeret(){
    const num = +document.querySelector("#c5 input").value;
    let output = document.querySelector("#c5 .output");
    const numbers = [];
    let res = 1;
    for(let i = 1; i <= num; i++){
        numbers.push(i);
        res *= i
    }
    output.innerHTML = numbers.join(" x ") + " = " + res;
}
const numbers_arr = [8,5,6,8,9,7,8,10,13,15,8,65,54,85,96,85,45,65];
function showBig(){
    let output = document.querySelector("#c6 .output");
    let res = numbers_arr[0]

    for(const num of numbers_arr){
        if(num > res){
            res = num;
        }

    }
    output.innerHTML = res;
}
function showSmall(){
    let output = document.querySelector("#c6 .output");

    let res = numbers_arr[0]

    for(const num of numbers_arr){
        if(num < res){
            res = num;
        }

    }
    output.innerHTML = res;
}
function sum(){
    let output = document.querySelector("#c6 .output");

    let res = 0

    for(const num of numbers_arr){
       
            res += num;
        
        }
    output.innerHTML = res;
    
    

    // output.innerHTML = numbers_arr.reduce((prev, num) => prev + num, 0);

}
function avarage(){
    let output = document.querySelector("#c6 .output");

    let res = 0

    for(const num of numbers_arr){
       
            res += num;
        
        }
    output.innerHTML = Math.round(res / numbers_arr.length);

    
}

function isPrime2(){
    let isX = true;

    const num = +document.querySelector("#c7 input").value;
    let output = document.querySelector("#c7 .output");

    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isX = false;
            break;
        }
    }
    if(isX){
        
        output.innerHTML = "prime";
        
    }else{
        output.innerHTML = "not prime";
    }
}