const numbers = [1, 1, 1, 1, 1, 1];

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];

const names = ["kim", "ron", "yair", "moshe", "efrat"]
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

function showLength(){

    let res = "";

    for(const str of names){
        if(str.length > res.length){
            res = str;

        }
    }console.log(res)
    return res;
}

// 5. יש ליצור פונקציה המקבלת מערך ומחזירה האם כל הערכים במערך שווים. (true/false) 
const count = [1, 2, 3, 4, 15];
function trueOrFalse(){

    let first = count[0];

    for(const x of count){
        if(x !== first){

            console.log(false)
            return false;
        }
        
            
        
    }
   console.log(true)
            return true;
}

// 6 יש ליצור פונקציה המקבלת 2 מספרים ומחזירה מערך עם כל המספרים שבניהם.

function showBetween(num1, num2){

    const num = [];

    for(let i = num1 + 1; i < num2; i++){

        num.push(i)
    }
    
    return num;
}

// 7. יש ליצור פונקציה המקבלת מערך ומחזירה איבר רנדומלי.

function rand(){

    let random = Number(Math.floor(Math.random() * count.length));
    return count[random];
}

// 8. יש ליצור פונקציה המקבלת מערך ומחזירה את האיבר הראשון והאחרון של המערך.

function firstAndLast(){
    console.log(count[0], count[count.length-1])
}

// 9. יש לקלוט מערך של מחרוזות טקסט באנגלית ולהפוך את האותיות הראשונות של כל המילים לאותיות גדולות - toUpperCase()

function upper(){
    const res = [];
    for(const up of names){
        const letter = up[0].toUpperCase();
        res.push(letter + up.slice(1)); 
    }
    
    return res;
}

// 10. יש לקלוט מערך של מחרוזות טקסט ולהחזיר רק את המחרוזות הארוכות מ-6 תווים.

const george = ["george", "john", "shosh", "vladilush", "vradimiro"]

function nameLength(){
    const res = [];

    for(const news of george){
        if(news.length > 6){
            res.push(news);
        }
        
    }
    console.log(res)
}