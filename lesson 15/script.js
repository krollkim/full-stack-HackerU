function add(){
    document.getElementById("tbl").insertAdjacentHTML("beforeend",
 `<tr>
     <td><input type="text" class="inp"></td>
     <td><button onclick="remove(this)">x</button></td>
 </tr> `);

 var inputs = document.getElementsByClassName("inp");
 inputs[inputs.length - 1].focus();

}

function remove(elem){
    
    if(confirm("are you sure?")){
        elem.parentElement.parentElement.remove();
    };
}

var arr = [];

function enter(elem, ev){

    
    if(ev.keyCode == 13){

        // arr.push(elem.value);
       

        document.getElementById("output").innerHTML += `<li>${elem.value}</li>`;
        elem.value = "";
    }

    

}