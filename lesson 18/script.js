function EnToHeb(x){
    switch(x){
        case "q": return "/";
        
        case "w": return "'";
        
        case "e": return "ק";
        
        case "r": return "ר";
        
        case "t": return "א";
        
        case "y": return "ט";
        
        case "u": return "ו";
    
        case "i": return "ן";
        
        case "o": return "ם";
        
        case "p": return "פ";
        
        case "a": return "ז";

        case "s": return "ס";
        
        case "d": return "ג";

        case "f": return "כ";

        case "g": return "ע";

        case "h": return "י";

        case "j": return "ח";

        case "k": return "ל";
        
        case "l": return "ך";

        case "z": return "ז";
        
        case "x": return "ס";
        
        case "c": return "ב";
        
        case "v": return "ה";
        
        case "b": return "נ";
        
        case "n": return "מ";
        
        case "m": return "צ";
        
        case ",": return "ת";
        
        case ".": return "ץ";
        

        default: return x;
}
}

function convert(){
var str = document.getElementById("english").value;
var res = "";

    for(var i = 0; i < str.length; i++){
        res += EnToHeb(str[i]);
    //     switch(str[i]){
    //         case "q": res += "/";
    //         break;
    //         case "w": res += "'";
    //         break;
    //         case "e": res += "ק";
    //         break;
    //         case "r": res += "ר";
    //         break;
    //         case "t": res += "א";
    //         break;
    //         case "y": res += "ט";
    //         break;
    //         case "u": res += "ו";
    //         break;
    //         case "i": res += "ן";
    //         break;
    //         case "o": res += "ם";
    //         break;
    //         case "p": res += "פ";
    //         break;
    //         case "a": res += "ז";
    //         break;
    //         case "s": res += "ס";
    //         break;
    //         case "z": res += "ז";
    //         break;
    //         case "x": res += "ס";
    //         break;
    //         case "c": res += "ב";
    //         break;
    //         case "v": res += "ה";
    //         break;
    //         case "b": res += "נ";
    //         break;
    //         case "n": res += "מ";
    //         break;
    //         case "m": res += "צ";
    //         break;
    //         case ",": res += "ת";
    //         break;
    //         case ".": res += "ץ";
    //         break;

    //         default: res += str[i];
           
    //     }
        
     }
    document.getElementById("hebrew").value = res;

}