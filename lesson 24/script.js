const letters = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
 
// function table(){
    
//     let x = Math.floor(Math.random() * letters.length);

//     for(let i = 0; i < letters.length; i++){
//         document.getElementsByTagName("tbody").innerHTML += `<tr> </tr>`;
//             for(let j = 0; j <= 4; j++)
                
           
//         if (i >= letters.length) {
            
//         }
//     }
    
//     console.log(letters[x])
    

// }


//  the complete challenge

function createTable(){
   let table = "";

   for(let x = 0; x < 10; x++){
    table += `<tr>`;

    for(let y = 0; y < 10; y++){
        const rand = Math.floor(Math.random() * letters.length);
        table += `<td>${letters[rand]}</td>`
    }
    table += `</tr>`;
   }
   
   document.querySelector(".lettersTable").innerHTML = table;
}

// next

function devImage(){
    document.querySelector('#img1').width += 25;
    // console.log(devImage())
}

function move(ev){
    const elem = document.querySelector('#animation');

    elem.style.top = (ev.y - 50) + 'px';
    elem.style.left = (ev.x - 50) + 'px';
    
}
//  let x = 0;

// function changeColor(){
//     const arr = ["pink","green", "blue", "yellow", "orange", "black"]
//    let rand = Math.floor(Math.random() * arr.length);

//     let circle = document.querySelector('#circle');
//     circle.style.backgroundColor = arr[rand];
// ++x;
    

// }setInterval(changeColor, 1000);

 
function changeColor(){
   let rand = Math.floor(Math.random() * 360);

    let circle = document.querySelector('#circle');
    circle.style.backgroundColor = `hsl(${rand}, 100%, 50%)`;

    

}setInterval(changeColor, 1000);