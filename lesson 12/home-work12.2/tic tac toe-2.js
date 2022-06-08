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

function clickOn(element){

    if(winner || element.innerHTML){
        return;
    }

    var tds = document.getElementsByTagName("td");
    element.innerHTML = isX ? "x" : "o";
    isX = !isX;

    for(var x = 0; x < options.length; x++){
        var opt = options[x];
        var res = tds[opt[0]].innerHTML;
        var counter = 0;

        for (var y = 0; y < opt.length; y++){
            var num = opt[y];
            var td = tds[num]

            if (!td.innerHTML){
                break;
            }

            if(res != td.innerHTML){
                break;
            }

           counter++;
        }

        if(counter == opt.length){

            winner = res;
            document.getElementById("output").innerHTML = winner + " - winner"
         }
    }
} 

function clearOutput(){
    document.getElementById("clickOn").innerHTML = "";

}