const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

// 1. יש ליצור פונקציה המקבלת מערך של מספרים ומחזירה את הסיכום
function sumUp(){

    let res = 0;

    for(const num of numbers){
        res += num;
        
        
        
    }
    console.log(res)
    return res;
}

// 2. יש ליצור פונקציה המקבלת מערך של מספרים ומחזירה את הממוצע.

function showAvereg(){

    let res = 0;

    for(const num of numbers){
        res += num / numbers.length;
        
        
        
    }
    console.log(res)
    return res;
}
//  3. יש ליצור פונקציה המקבלת 2 מערכים (או יותר) ומחזירה אותם כמערך אחד.

function margeArray(){
const res = numbers.concat(numbers1);

console.log(res)
document.getElementById("output3").innerHTML = res;
return res;
}

// 4. יש ליצור פונקציה המקבלת מערך של מחזורות טקסט ומחזירה את המחרוזות הארוכה.