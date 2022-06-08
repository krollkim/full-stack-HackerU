var i = 0;
var interval;
function createTable(){
    var str = "";

   
    // 

    // for of loop!!!!

    // for(var car of cars){

    // } 

    interval = setInterval(function(){   
        
        if (i >= cars.length){
            clearInterval(interval);
        }
            var car = cars[i++];
            document.getElementById("list").innerHTML +=` 

    <tr>
                <td>${i}</td>
                <td>${car.number}}</td>
                <td>${car.manufacturer}</td>
                <td>${car.model}</td>
                <td>${car.name}</td>
                <td>${car.licence}</td>
    </tr>`;
        }, 300);
}