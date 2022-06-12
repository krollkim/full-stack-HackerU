let sum = [];
function arr(){
    let add = document.getElementById("check").value;

    sum.push(Number(add));

    1

    document.getElementById("output").innerHTML = sum.join();

    
}

//  1. יש ליצור פונקציה המקבלת מערך של מספרים ומחזירה את הסיכום.

const numbers = [88, 12, 102, 66, 1, 13, 5, 10];

function sumUp(){

    let total = 0;
    let i = 0;

    while( i < numbers.length){

        total += numbers[i];
        i++;
    }
    document.getElementById("output1").innerHTML = total;

    console.log(numbers)

    // for(let numbers of elem){
    //     total += numbers;
    // }
    // return total;
 
   
} 

// 2. יש ליצור פונקציה המקבלת מערך של מספרים ומחזירה את הממוצע.

function showAvereg(){
    let total = 0;
    let i = 0;


    while( i < numbers.length){

       total = numbers.length;
        i++;
    }
    document.getElementById("output2").innerHTML = total / numbers.length;
}

// 3. יש ליצור פונקציה המקבלת 2 מערכים (או יותר) ומחזירה אותם כמערך אחד.

function margeArray(){
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    // 2 answers both work.
// let res = arr1.concat(arr2);
let res = [...arr1, ...arr2];

// did not worked

    // for(let i = 0; i < arr1.length && i < arr2.length; i++){
    //   res = arr1 + arr2;
    // }

document.getElementById("output3").innerHTML = res;
    
    console.log(res)


}

const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet", "cabbage"];

// 4. יש ליצור פונקציה המקבלת מערך של מחזורות טקסט ומחזירה את המחרוזות הארוכה.

function showLength(){
let res = vegetables[0];

    for(let i = 0; i < vegetables[i]; i++){
    if(vegetables.length > res ){
        res = vegetables[i];
        }
    }
    document.getElementById("output4").innerHTML = res;
    console.log(res)
}

// 5. יש ליצור פונקציה המקבלת מערך ומחזירה האם כל הערכים במערך שווים. (true/false) 

const count = [1, "one", 2, "two", 3, "three"];

let res = count.every(trueOrFalse);

function trueOrFalse(elem){
   

    if(elem === 0){
            return true; 
        }
        else{
            return false;
        
    }
}
    
   