function showList(){
    var num = document.getElementById("inp1").value;

    document.getElementById("output").innerHTML = "";

    var i = 0;

    while(i < Number(num)){
        
        document.getElementById("output").innerHTML += i + ", ";
        i++;
    }
    console.log("output")
}

function showList2(){
    var num1 = document.getElementById("inp2").value;
    document.getElementById("output2").innerHTML = "";

    var i = 0;

    while(i < Number(num1)){
        if(i % 2 === 0){
        document.getElementById("output2").innerHTML += i + ", ";
        }
        i++;
    }
    
}


 function showList3(){
     var arr = []
    var i = 1;
    var result = 1;

    var data = document.getElementById("inp3").value;

    while(i <= Number(data)){

        result = result * i;
        arr.push(i);
        i++;
    }

        document.getElementById("output3").innerHTML = arr.join('x') + "=" + result;
 }


    
function showList4(){
    var num1 = document.getElementById("inp4").value;
    var num2 = document.getElementById("inp5").value;
    document.getElementById("output4").innerHTML = "";

    var i = Number(num1);

    while(i <= Number(num2)){
        
        document.getElementById("output4").innerHTML += i + ", ";

        i++;
    }
}

var arr = [8, 5, 6, 8, 9, 7, 8, 10, 12, 15, 8, 65, 54, 85, 96, 85, 45, 65,];

function showList5(){

    var i = 0;
    var result = 0;

    while(i < arr.length){
        if(arr[i] > result){
            result = arr[i]
        }

        i++
    }

    document.getElementById("output5").innerHTML = result;
}

function showList6(){
    var i = 0;
    var result = arr[0]; 

    while(i < arr.length){
        if(arr[i] < result){
            result = arr[i]
        }

        i++;
    }

    console.log(result)
    document.getElementById("output6").innerHTML = result;
}

function showList7(){
    var i = 0;
    var result = 0; 

    while(i < arr.length){
            result = result + arr[i];
       

        i++;
    }

    document.getElementById("output7").innerHTML = result;
}

function showList8(){
    var i = 0;
    var result = 0; 

    while(i < arr.length){
        result = result + arr[i];
        

    i++;
    }
  console.log(result)
    document.getElementById("output8").innerHTML = result / arr.length;
}

// var names = ['דוריאל', 'אביר', 'טובה', 'עודד', 'מזר', 'אלונה', 'יוכבד', 'לב', 'רומי', 'אלינור', 'אנאל', 'שקד', 'גאולית', 'הוד', 'אילת', 'אצילה', 'אליהו', 'בר', 'נוי', 'אביאור'];

// function showList() {
//     var i = 0;

//     while (i < names.length) {
//         // "<li>" + names[i] + "</li>";
//         document.getElementById("list").innerHTML += `<li>${names[i]}</li>`;
//         i++;
//     }
//     console.log(checkbox)
// }

// function randName(){

//     var rand = Math.floor(Math.random() * names.length);

//     alert(names[rand]);
// }
