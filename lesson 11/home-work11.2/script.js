function showPrime(){
    
var num1 = document.getElementById("num1").value;
document.getElementById("output1").innerHTML = ""; 

if(num1 < 1){

    return false

}
for(var i = 2; i < num1; i++){
    if(num1 % i == 0){
        return false
        }
    
    }
    return true 
    
    checkIfPrime(num1) ? output.innerHTML = 'IS prime' : output.innerHTML = 'Not a prime'
   
}
  
    
   

// 
// function ifPrime() {
//     const inputNum = Number(document.getElementById('input').value)
//     const output = document.getElementById('output')

//     function checkIfPrime(num) {
//         if (num <= 1) {
//             return false
//         }
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false
//             }
//         }
//         return true
//     }
//     checkIfPrime(inputNum) ? output.innerHTML = 'IS prime' : output.innerHTML = 'Not a prime'
// }
// 
function showbelow(){
    var num2 = Number (document.getElementById("num2").value);
    document.getElementById("output2").innerHTML = "";

    

    for(var i = 0; i < num2; i++){
        if(i % 2 == 1){
           document.getElementById("output2").innerHTML  += i + ", ";  
        } 
    }
 
    console.log(output2)
}

function showalleven(){
    var num3 = Number (document.getElementById("num3").value);
    document.getElementById("output3").innerHTML = "";

    for(var i = 0; i < num3; i++){
        if(i % 2 == 0){
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
