var i = 0;
var interval;

function createTable(){
    

interval = setInterval(function(){ 
    
var car = cars[i++];

document.getElementById("table").innerHTML +=

`<tr  onclick="changeColor(this)">
<td><button onclick="removeArr(this)">x</td>
 <td>${i}</td>
  <td>${car.number}מס' רישוי</td>
  <td>${car.manufacturer}</td>
  <td>${car.name}</td>
  <td>${car.model}</td>
   <td>${car.km}</td>
   <td>${car.firstName} ${car.lastName} </td>
   </tr>`;
}, 50)

if(i >= cars.length){
    clearInterval(interval);
}

}

function changeColor(elem){

    // var colors = elem.style.backgroundcolor;
   var x = Math.floor(Math.random() * 357)
   elem.style.backgroundColor = "hsla( " + x + ", 93%, 50%, 0.843)"

}
  
var trashBin = [];

function removeArr(elem){
 
    if(confirm("sure you want to delete?")){
        elem.parentElement.parentElement.remove();
        var res = parentElement.parentElement;
        cars.splice(res); 
        trashBin.push(res);
        alert("massege have been deleted");
    } else {
        alert("massege did not deleted");
    }

    // if(removeArr){
    //     console.log("deleted sucssesfully");
    // }
 
    "********"

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
