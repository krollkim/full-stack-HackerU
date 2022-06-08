var isX = true;
var winner = "";
var options = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


function clickOn(elem){

    if (winner || elem.innerHTML){
        return;
    }

    var  tds = document.getElementsByTagName("td");
    elem.innerHTML = isX ? "x" : "o";
    isX = !isX;

    for (var x = 0; x < options.length; x++){
        var opt = options[x];

        var first = tds[opt[0]].innerHTML;

        var counter = 0;

        for (var y = 0; y < opt.length; y++){
            var num = opt[y];
            var td = tds[num];

            if(!td.innerHTML || first != td.innerHTML){
                break;
            }
            counter++;
        }
        if (counter == opt.length){
            winner = first;
            document.getElementById("print").innerHTML = first + " - winner!";
         
        }
    }
}


// the long way....
    // if (isX){
    //     elem.innerHTML = "x";
    //     isX = false;
    // }else {
    //     elem.innerHTML = "o";
    //     isX = true;
    // }