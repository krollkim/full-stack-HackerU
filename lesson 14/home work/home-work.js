var arr = [];

// to add an item to the list: 1
function addItem(){
   

    document.getElementById("table").innerHTML += `
     <tr>
    <td id="tds"><input id="num1" type="text" value=""></td>
    <td id="btn2"><button  onclick="remove(this)">x</button></td>
    </tr>` 
    
    
}

// to remove items from the list: 2
function remove(elem){

    elem.parentElement.parentElement.remove();
}

// making an array of list through textarea: 3

function enterNames(){
 var names = document.getElementById("text").value;
 if(event.keyCode == 13){
     arr.push(names);
    document.getElementById("text").value = "";
 }

}


function showList(){
    var x = arr.length;

    for(var i = 0; i < x; i++){
        document.getElementById("output").innerHTML += `<li>${arr[i]}</li>`;
    }

}

// to clean all the array + output + textareas: 4
function cleanArr(){
    document.getElementById("output").innerHTML = arr.pop();
    arr = [];
}

