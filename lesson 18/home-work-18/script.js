var date = new Date().getDay();

    var divo = document.getElementById("num");

   switch (date) {
    case 0:
        divo.innerHTML = "ראשון"
        break;
    case 1:
        divo.innerHTML = "שני"
        break;
    case 2:
        divo.innerHTML = "שלישי"
        break;
    case 3:
        divo.innerHTML = "רביעי"
        break;
    case 4:
        divo.innerHTML = "חמישי"
        break;
    case 5:
        divo.innerHTML = "שישי"
        break
    case 6:
        divo.innerHTML = "שבת"
        break
}

function numToText(){

    var num1 = Number(document.getElementById("number").value);

    var out = document.getElementById("output");

    switch(num1){
        case 1:
            out.innerHTML = "one";
            break
        case 2:
            out.innerHTML = "two";
            break
        case 3:
            out.innerHTML = "three";
            break
        case 4:
            out.innerHTML = "four";
            break
        case 5:
            out.innerHTML = "five";
            break
        case 6:
            out.innerHTML = "six";
            break
        case 7:
            out.innerHTML = "seven";
            break
        case 8:
            out.innerHTML = "eight";
            break
        case 9:
            out.innerHTML = "nine";
            break
        case 10:
            out.innerHTML = "ten";
            break
            default:
             out.innerHTML = "not a valid  number(1-10)"
    }


    
}

function lifeQuots(){

    var rand = Math.floor((Math.random()*9));

    switch(rand){
        case 1:
            output1.innerHTML = "when life goes down: smile";
            break
        case 2:
            output1.innerHTML = "when life goes down: love";
            break
        case 3:
            output1.innerHTML = "when life goes down: be you ";
            break
        case 4:
            output1.innerHTML = "when life goes down: just do it";
            break
        case 5:
            output1.innerHTML = "when life goes down: poop";
            break
        case 6:
            output1.innerHTML = "when life goes down: be free";
            break
        case 7:
            output1.innerHTML = "when life goes down: except it";
            break
        case 8:
            output1.innerHTML = "when life goes down: dont except it";
            break
        case 1:
            output1.innerHTML = "when life goes down: be brave";
            break

    }
}