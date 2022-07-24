// 1
function changeBtn(){
    let btn = document.getElementById("btn1");
    console.log(btn)
    if(btn.innerText === "on"){
       
        btn.innerText = "off";
        btn.style.backgroundColor = "red";
        btn.style.color = "white"
    }
    else{
       btn.innerText = "on";
       btn.style.backgroundColor = "green";
       btn.style.color = "white"
    }
}

// 2
function makeBig(){
    document.querySelector("#img3").width += 25;

    // console.log(img3)
}

// 3
function createBoard(){

    const arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h","j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    let table = ""

    for(let x = 0; x < 10; x++){
        
        table += `<tr>`

        for(let y = 0; y < 10; y++){

            const rand = Math.floor(Math.random() * arr.length);
            table += `<td>${arr[rand]}</td>`
        }

        table += `</tr>`
    }

    document.querySelector(".lettersTable").innerHTML = table;
}

// 4
function circleMove(ev){

  const elem = document.querySelector('#circleM');

   elem.style.top = (ev.clientY - 50) + 'px';
   elem.style.left = (ev.clientX - 50) + 'px';

   console.log(ev)
}

// 5
function colChange(){
    let rand = Math.floor(Math.random() * 360);

    for(let i = 0; i < rand; i++){
        
        const col = document.querySelector(".colChange");

        col.style.backgroundColor = `hsl(${rand}, 100%, 50%)`;
    }

}
setInterval(colChange,500);

// 6
function changeTxt(){
    let text1 = document.querySelector("#txt1").value;
    let text2 = document.querySelector("#txt2").value;

   document.querySelector("#txt2").value = text1;
   document.querySelector("#txt1").value = text2;
   
   }

// 7

function dates(date1,date2){

let dateX = new Date(date1);
let dateY = new Date(date2);
let res = [];

let d1 = dateX.getDate();
let m1 = dateX.getMonth() +1;
let y1 = dateX.getFullYear();

let d2 = dateY.getDate();
let m2 = dateY.getMonth() +1;
let y2 = dateY.getFullYear();




for(let i = d1 + 1; i < d2; i++){
let masheu = i.toString() + "," + m1 + "," + y1
 res.push(masheu + " ");
 

}
document.getElementById("date").innerHTML = res;

console.log(res)
}

