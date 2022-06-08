var i = 0;
var interval;

function createTable(){
    

interval = setInterval(function(){ 
    
var car = cars[i++];

document.getElementById("table").innerHTML +=

`<tr  onclick="changeColor(this)">
<td>
<button class="remove" onclick="removeArr(this)">x</button>
<button class="restore" onclick="restoreTr(this)">^</button>
</td>

 <td>${i}</td>
  <td>${car.number}</td>
  <td>${car.manufacturer}</td>
  <td>${car.name}</td>
  <td>${car.model}</td>
   <td>${car.km}</td>
   <td>${car.firstName} ${car.lastName} </td>
   </tr>`;

   if(i >= cars.length){
    clearInterval(interval);
}
}, 50)



}

function changeColor(elem){

    // random color
   var x = Math.floor(Math.random() * 357)
   elem.style.backgroundColor = "hsla( " + x + ", 93%, 50%, 0.843)"

    // one color back & forth
}
  
var trashBin = [];

function removeArr(elem){
 
    if(confirm("sure you want to delete?")){
        var tr = elem.parentElement.parentElement;
        document.getElementById("trashBin").innerHTML += tr.outerHTML;
        tr.remove();
        snackBar("massege have been deleted");
       


        // var res = parentElement.parentElement;
        // cars.splice(res); 
        // trashBin.push(res);
    } 

    // if(removeArr){
    //     console.log("deleted sucssesfully");
    // }
 
// var indexOfObject = cars.findIndex(object)

//     cars.splice(indexOfObject, 1);

//   var george = cars.splice(elem.value);
  
// elem.parentElement.parentElement.removeArr();

// document.getElementById("elem").innerHTML = cars.splice();

// elem.parentElement.parentElement.splice(elem)

// var c = cars.splice(elem, 1);
   
//    elem.document.getElementById("c");

// removeArr.splice(elem);

//    removeArr.splice(cars.indexof(cars));
}


function restoreTr(elem){
 
    
        var tr = elem.parentElement.parentElement;
        document.getElementById("table").innerHTML += tr.outerHTML;
        tr.remove();
        snackbar("הנתון שוחזר בהצלחה");
    
    
    
}
    "********"

    


var myTimeOut;

function snackBar(text){
var elem = document.getElementById("alert");
clearTimeout(myTimeOut);
    elem.innerHTML = text;
    elem.style.display = "block";

    myTimeOut = setTimeout(function() {
        elem.style.display = "none";
    }, 3 * 1000)
}

function trashBin(){

    document.getElementById("res").value;
    
interval = setInterval(function(){ 
    
    var trashBin1 = cars[i++];
    
    document.getElementById("table2").innerHTML +=
    
     `<tr>
        <td>${i}</td>
        <td>${car.number}מס' רישוי</td>
        <td>${car.manufacturer}</td>
        <td>${car.name}</td>
        <td>${car.model}</td>
        <td>${car.km}</td>
        <td>${car.firstName} ${car.lastName} </td>
    </tr>`;
    }, 50)
    
    if(i >= trashBin1.length){
        clearInterval(interval);
    }
    
    }
