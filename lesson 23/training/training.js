
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